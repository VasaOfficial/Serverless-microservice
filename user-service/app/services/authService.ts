import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { autoInjectable } from 'tsyringe'
import { plainToClass } from 'class-transformer'
import { ErrorResponse, SuccessResponse } from '../util/response'
import { UserRepository } from '../repository/authRepository'
import { SignupInput, LoginInput } from '../models/dto/LoginInput'
import { AppValidationError } from '../util/errors'

import admin from '../config/firebase'

@autoInjectable()
export class UserService {
  repository: UserRepository

  constructor(repository: UserRepository) {
    this.repository = repository
  }

  async ResponseWithError() {
    return ErrorResponse(404, 'requested method is not supported!')
  }

  // User Creation, Login and Verification
  async CreateUser(event: APIGatewayProxyEventV2) {
    try {
      const parsedBody = JSON.parse(event.body || '{}')
      const input = plainToClass(SignupInput, parsedBody)
      const error = await AppValidationError(input)
      if (error) return ErrorResponse(404, error)

       await admin.auth().createUser({
        email: input.email,
        password: input.password,
      })

      // const data = await this.repository.createAccount({
      //   email: input.email,
      //   firebaseUid: userRecord.uid,
      // });

      return SuccessResponse({
        message: 'User created successfully.',
        // userData: data,
      })
    } catch (error) {
      console.log(error)
      return ErrorResponse(500, error)
    }
  }

  async LoginUser(event: APIGatewayProxyEventV2) {
    try {
      const parsedBody = JSON.parse(event.body || '{}')
      const input = plainToClass(LoginInput, parsedBody)
      const error = await AppValidationError(input)
      if (error) return ErrorResponse(404, error)

      const userRecord = await admin.auth().getUserByEmail(input.email)

      // Retrieve additional user data from the database
      // const userData = await this.repository.findAccount(input.email);

      return SuccessResponse({
        email: userRecord.email,
        // userData,
      })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }

  async ResetPassword(event: APIGatewayProxyEventV2) {
    try {
      const input = plainToClass(LoginInput, event.body)
      const error = await AppValidationError(input)
      if (error) return ErrorResponse(404, error)

      await admin.auth().generatePasswordResetLink(input.email)

      return SuccessResponse({
        message: 'Password reset email sent successfully',
      })
    } catch (error) {
      console.error('Error sending password reset email:', error)
      return ErrorResponse(500, error)
    }
  }

  async ValidateToken(event: APIGatewayProxyEventV2) {
    try {
      const { token } = JSON.parse(event.body || '{}')
      if (!token) return ErrorResponse(400, 'Token is required')

      const decodedToken = await admin.auth().verifyIdToken(token)

      return SuccessResponse({
        message: 'Token was validated successfully.',
        uid: decodedToken.uid,
      })
    } catch (error) {
      console.error('Error validating token:', error)
      return ErrorResponse(500, error)
    }
  }

  async LogoutUser(event: APIGatewayProxyEventV2) {
    try {
      const { uid } = JSON.parse(event.body || '{}')
      if (!uid) return ErrorResponse(400, 'User ID is required')

      await admin.auth().revokeRefreshTokens(uid)

      return SuccessResponse({
        message: 'User was successfully logged out.',
      })
    } catch (error) {
      console.error('Error logging out user:', error)
      return ErrorResponse(500, error)
    }
  }
}

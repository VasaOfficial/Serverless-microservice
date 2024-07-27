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
      const input = plainToClass(SignupInput, event.body)
      const error = await AppValidationError(input)
      if (error) return ErrorResponse(404, error)

      const userRecord = await admin.auth().createUser({
        email: input.email,
        password: input.password,
      })

      // const data = await this.repository.createAccount({
      //   email: input.email,
      //   firebaseUid: userRecord.uid,
      // });

      await admin.auth().generateEmailVerificationLink(input.email)

      return SuccessResponse({
        message: 'User created successfully. Verification email sent.',
        uid: userRecord.uid,
        // userData: data,
      })
    } catch (error) {
      console.log(error)
      return ErrorResponse(500, error)
    }
  }

  async LoginUser(event: APIGatewayProxyEventV2) {
    try {
      const input = plainToClass(LoginInput, event.body)
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
}

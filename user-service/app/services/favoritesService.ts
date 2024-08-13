import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { autoInjectable } from 'tsyringe'
import { plainToClass } from 'class-transformer'
import { ErrorResponse, SuccessResponse } from '../util/response'
import { UserRepository } from '../repository/authRepository'
import { SignupInput } from '../models/dto/LoginInput'
import { AppValidationError } from '../util/errors'
import auth from 'app/config/firebase'

@autoInjectable()
export class UserService {
  repository: UserRepository

  constructor(repository: UserRepository) {
    this.repository = repository
  }

  async ResponseWithError() {
    return ErrorResponse(404, 'requested method is not supported!')
  }

  async GetFavorites(event: APIGatewayProxyEventV2) {
    // try {
    //   const parsedBody = JSON.parse(event.body || '{}')
    //   const input = plainToClass(SignupInput, parsedBody)
    //   const error = await AppValidationError(input)
    //   if (error) return ErrorResponse(404, error)

    //   // Save user data to your database using UserRepository
    //   const data = await this.repository.createAccount({
    //     email: input.email,
    //     firebaseUid: input.uid,
    //   })

    //   return SuccessResponse({
    //     message: 'User created successfully.',
    //     userData: data,
    //   })
    // } catch (error) {
    //   const errorCode = error.code
    //   const errorMessage = error.message

    //   if (errorCode === 'auth/weak-password') {
    //     return ErrorResponse(400, 'Password is too weak.')
    //   } else if (errorCode === 'auth/email-already-in-use') {
    //     return ErrorResponse(400, 'Email already in use.')
    //   } else {
    //     return ErrorResponse(500, errorMessage)
    //   }
    // }
  }

  async AddFavorites(event: APIGatewayProxyEventV2) {
    // try {
    //   const authHeader = event.headers.authorization
    //   if (!authHeader) {
    //     return ErrorResponse(401, 'Unauthorized')
    //   }

    //   // Extract the token from the Authorization header
    //   const token = authHeader.split(' ')[1]
    //   if (!token) {
    //     return ErrorResponse(401, 'Unauthorized')
    //   }

    //   // Verify Firebase token
    //   const decodedToken = await auth.verifyIdToken(token)
    //   const { uid } = decodedToken

    //   // Retrieve user data from the database
    //   const user = await this.repository.findUserByUid(uid)
    //   if (!user) {
    //     return ErrorResponse(404, 'User not found')
    //   }

    //   return SuccessResponse({
    //     message: 'Verification successful.',
    //     userData: user,
    //   })
    // } catch (error) {
    //   if (error.code === 'auth/argument-error') {
    //     return ErrorResponse(400, 'Invalid token')
    //   } else if (error.code === 'auth/id-token-expired') {
    //     return ErrorResponse(401, 'Token expired')
    //   } else if (error.code === 'auth/id-token-revoked') {
    //     return ErrorResponse(401, 'Token revoked')
    //   } else if (error.code === 'auth/invalid-id-token') {
    //     return ErrorResponse(401, 'Invalid ID token')
    //   } else if (error.code === 'auth/user-not-found') {
    //     return ErrorResponse(404, 'User not found')
    //   } else {
    //     return ErrorResponse(500, error.message || 'Internal server error')
    //   }
    // }
  }

  async DeleteFavorites(event: APIGatewayProxyEventV2) {
    // try {
    //   const authHeader = event.headers.authorization;
    //   if (!authHeader) {
    //     return ErrorResponse(401, 'Unauthorized');
    //   }

    //   // Extract the token from the Authorization header
    //   const token = authHeader.split(' ')[1];
    //   if (!token) {
    //     return ErrorResponse(401, 'Unauthorized');
    //   }

    //   // Verify Firebase token
    //   const decodedToken = await auth.verifyIdToken(token);
    //   const { uid } = decodedToken;

    //   console.log("all good")
    //   // Check if the user exists in the database
    //   const user = await this.repository.findUserByUid(uid);
    //   console.log("all good 2")

    //   if (user) {
    //     // User exists, validate the token
    //     console.log("all good 3")
    //     return await this.TokenVerification(event);
    //   } else {
    //     console.log("all good 4")
    //     return await this.CreateUser(event);
    //   }
    // } catch (error) {
    //   if (error.code === 'auth/argument-error') {
    //     return ErrorResponse(400, 'Invalid token');
    //   } else if (error.code === 'auth/id-token-expired') {
    //     return ErrorResponse(401, 'Token expired');
    //   } else if (error.code === 'auth/id-token-revoked') {
    //     return ErrorResponse(401, 'Token revoked');
    //   } else if (error.code === 'auth/invalid-id-token') {
    //     return ErrorResponse(401, 'Invalid ID token');
    //   } else if (error.code === 'auth/user-not-found') {
    //     return ErrorResponse(404, 'User not found');
    //   } else {
    //     return ErrorResponse(500, error.message || 'Internal server error');
    //   }
    // }
  }
}

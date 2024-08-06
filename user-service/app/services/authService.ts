import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { autoInjectable } from 'tsyringe'
import { plainToClass } from 'class-transformer'
import { ErrorResponse, SuccessResponse } from '../util/response'
import { UserRepository } from '../repository/authRepository'
import { SignupInput, LoginInput } from '../models/dto/LoginInput'
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

  // User Creation, Login and Verification
  async CreateUser(event: APIGatewayProxyEventV2) {
    try {
      const parsedBody = JSON.parse(event.body || '{}')
      const input = plainToClass(SignupInput, parsedBody)
      const error = await AppValidationError(input)
      if (error) return ErrorResponse(404, error)

      // Save user data to your database using UserRepository
      const data = await this.repository.createAccount({
        email: input.email,
        firebaseUid: input.uid,
      });

      return SuccessResponse({
        message: 'User created successfully.',
        userData: data
      })
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message

      if (errorCode === 'auth/weak-password') {
        return ErrorResponse(400, 'Password is too weak.');
      } else if (errorCode === 'auth/email-already-in-use') {
        return ErrorResponse(400, 'Email already in use.');
      } else {
        return ErrorResponse(500, errorMessage);
      }
    }
  }

  async LoginUser(event: APIGatewayProxyEventV2) {
    try {
      const parsedBody = JSON.parse(event.body || '{}')
      const input = plainToClass(LoginInput, parsedBody)
      const error = await AppValidationError(input)
      if (error) return ErrorResponse(404, error)

      const token = event.headers.Authorization?.split(' ')[1];
      if (!token) {
        return ErrorResponse(401, 'Unauthorized');
      }

      // Verify Firebase token
      const decodedToken = await auth.verifyIdToken(token);
      const { uid } = decodedToken;

      // Retrieve user data from the database
      const user = await this.repository.findUserByUid(uid, input.email);
      if (!user) {
        return ErrorResponse(404, 'User not found');
      }

      return SuccessResponse({
        message: 'Login successful.',
        userData: user
      })
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found'){
        return ErrorResponse(401, 'Invalid email or password');
      } else {
        return ErrorResponse(500, errorMessage);
      }
    }
  }

  // async LogoutUser(event: APIGatewayProxyEventV2) {
  //   try {
  //     const { uid } = JSON.parse(event.body || '{}')
  //     if (!uid) return ErrorResponse(400, 'User ID is required')

  //     // Sign out user using Firebase
  //     await signOut(auth);

  //     return SuccessResponse({
  //       message: 'User was successfully logged out.',
  //     })
  //   } catch (error) {
  //     console.error('Error logging out user:', error)
  //     return ErrorResponse(500, error)
  //   }
  // }

  // async ResetPassword(event: APIGatewayProxyEventV2) {
  //   try {
  //     const parsedBody = JSON.parse(event.body || '{}')
  //     const input = plainToClass(PasswordResetInput, parsedBody)
  //     const error = await AppValidationError(input)
  //     if (error) return ErrorResponse(404, error)

  //     await sendPasswordResetEmail(auth, input.email);

  //     return SuccessResponse({
  //       message: 'Password reset email sent successfully',
  //     })
  //   } catch (error) {
  //     console.error('Error sending password reset email:', error)
  //     return ErrorResponse(500, error)
  //   }
  // }

  // async ValidateToken(event: APIGatewayProxyEventV2) {
  //   try {
  //     const { token } = JSON.parse(event.body || '{}')
  //     if (!token) return ErrorResponse(400, 'Token is required')

  //     const token = await getIdToken(user);

  //     return SuccessResponse({
  //       message: 'Token was validated successfully.',
  //       uid: decodedToken.uid,
  //     })
  //   } catch (error) {
  //     console.error('Error validating token:', error)
  //     return ErrorResponse(500, error)
  //   }
  // }

  // async SignUpWithGoogle(event: APIGatewayProxyEventV2) {
  //   try {
  //     const { token } = JSON.parse(event.body || '{}')
  //     if (!token) return ErrorResponse(400, 'Token is required')

  //     const token = await getIdToken(user);

  //     return SuccessResponse({
  //       message: 'Token was validated successfully.',
  //       uid: decodedToken.uid,
  //     })
  //   } catch (error) {
  //     console.error('Error validating token:', error)
  //     return ErrorResponse(500, error)
  //   }
  // }

  // async SignUpWithGithub(event: APIGatewayProxyEventV2) {
  //   try {
  //     const { token } = JSON.parse(event.body || '{}')
  //     if (!token) return ErrorResponse(400, 'Token is required')

  //     const token = await getIdToken(user);

  //     return SuccessResponse({
  //       message: 'Token was validated successfully.',
  //       uid: decodedToken.uid,
  //     })
  //   } catch (error) {
  //     console.error('Error validating token:', error)
  //     return ErrorResponse(500, error)
  //   }
  // }
}

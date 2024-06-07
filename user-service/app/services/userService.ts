import { UserRepository } from "../repository/userRepository";
import { ErrorResponse, SuccessResponse } from "../util/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { autoInjectable } from "tsyringe";
import { plainToClass } from 'class-transformer'
import { SignupInput } from "../models/dto/SignInput";
import { AppValidationError } from "../util/errors";
import { GetHashedPassword, GetSalt, GetToken, ValidatePassword, VerifyToken } from "../util/password";
import { LoginInput } from "../models/dto/LoginInput";
import { GenerateAccessCode, SendVerificationCode  } from "../util/notification";

@autoInjectable()
export class UserService {
  repository: UserRepository
  constructor(repository: UserRepository) {
    this.repository = repository
  }

  // User Creation, Login and Verification
  async CreateUser(event: APIGatewayProxyEventV2) {
    try {
      const input = plainToClass(SignupInput, event.body)
  
      const error = await AppValidationError(input)
      if(error) return ErrorResponse(404, error)
  
      const salt = await GetSalt()
      const hashedPassword = await GetHashedPassword(input.password, salt)
      const data = await this.repository.createAccount({ 
        email: input.email,
        password: hashedPassword,
        salt: salt,
        phone: input.phone,
        userType: 'BUYER' 
      })

      return SuccessResponse(data);
    } catch (error) {
      console.log(error)
      return ErrorResponse(500, error)
    }  
  }

  async LoginUser(event: APIGatewayProxyEventV2) {
    try {
      const input = plainToClass(LoginInput, event.body)
  
      const error = await AppValidationError(input)
      if(error) return ErrorResponse(404, error)
  
      const data = await this.repository.findAccount(input.email)
      const verified = await ValidatePassword(input.password, data.password, data.salt)

      if(!verified) {
        throw new Error('Password does not match')
      }
      
      const token = GetToken(data)

      return SuccessResponse({ token });
    } catch (error) {
      console.log(error)
      return ErrorResponse(500, error)
    }  
  }

  async GetVerificationToken(event: APIGatewayProxyEventV2) {
    const token = event.headers.authorization
    const payload = await VerifyToken(token)
    if (payload) {
      const { code, expiry } = GenerateAccessCode()
      // save on DB to confirm verification
      const response = await SendVerificationCode(code, payload.phone)
      return SuccessResponse({ message: 'Verification code is sent to your phone'});
    }
  }

  async VerifyUser(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Verify User'});
  }

  // User Profile
  async CreateProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Create User Profile'});
  }

  async GetProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Get User Profile'});
  }

  async EditProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Edit User Profile'});
  }
  
  // Cart Section
  async CreateCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Create Cart'});
  }

  async GetCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Get Cart'});
  }

  async UpdateCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Update Cart'});
  }

  // Payment Section
  async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Create Payment Method'});
  }

  async GetPaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Get Payment Method'});
  }

  async UpdatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Update Payment Method'});
  }
}
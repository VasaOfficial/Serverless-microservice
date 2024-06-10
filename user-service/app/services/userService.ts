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
import { VerificationInput} from '../models/dto/VerificationInput'
import { TimeDifference } from '../util/dateHelper'
import { ProfileInput } from "../models/dto/AddressInput";

@autoInjectable()
export class UserService {
  repository: UserRepository
  constructor(repository: UserRepository) {
    this.repository = repository
  }

  async ResponseWithError(event: APIGatewayProxyEventV2) {
    return ErrorResponse(404, "requested method is not supported!");
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
      return ErrorResponse(500, error)
    }  
  }

  async GetVerificationToken(event: APIGatewayProxyEventV2) {
    try {
      const token = event.headers.authorization;
      const payload = await VerifyToken(token);
  
      if (!payload) return ErrorResponse(403, "authorization failed!");
  
      const { code, expiry } = GenerateAccessCode();
      await this.repository.updateVerificationCode(payload.user_id, code, expiry);
  
      return SuccessResponse({
        message: "verification code is sent to your registered mobile number!",
      });
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }

  async VerifyUser(event: APIGatewayProxyEventV2) {
    try {
      const token = event.headers.authorization;
      const payload = await VerifyToken(token);
      if (!payload) return ErrorResponse(403, "authorization failed!");
  
      const input = plainToClass(VerificationInput, event.body);
      const error = await AppValidationError(input);
      if (error) return ErrorResponse(404, error);
  
      const { verification_code, expiry } = await this.repository.findAccount(
        payload.email
      );
      // find the user account
      if (verification_code === parseInt(input.code)) {
        // check expiry
        const currentTime = new Date();
        const diff = TimeDifference(expiry, currentTime.toISOString(), "m");
  
        if (diff > 0) {
          await this.repository.updateVerifyUser(payload.user_id)
        } else {
          return ErrorResponse(403, "verification code is expired!");
        }
      }
      return SuccessResponse({ message: "user verified!" });
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }

  // User Profile
  async CreateProfile(event: APIGatewayProxyEventV2) {
    try {
      const token = event.headers.authorization;
      const payload = await VerifyToken(token);
  
      if(payload === false) return ErrorResponse(403, "authorization failed!");
  
      const input = plainToClass(ProfileInput, event.body);
      const error = await AppValidationError(input);
      if (error) return ErrorResponse(404, error);
  
      await this.repository.createProfile(payload.user_id, input)
      return SuccessResponse({ message: 'profile created successfully!'});
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }

  async GetProfile(event: APIGatewayProxyEventV2) {
    try {
      const token = event.headers.authorization;
      const payload = await VerifyToken(token);
  
      if(payload === false) return ErrorResponse(403, "authorization failed!");
  
      const result = await this.repository.getUserProfile(payload.user_id)
      return SuccessResponse(result);

    } catch (error) {
      return ErrorResponse(500, error)
    }
  }

  async EditProfile(event: APIGatewayProxyEventV2) {
    try {
      const token = event.headers.authorization;
      const payload = await VerifyToken(token);
  
      if(payload === false) return ErrorResponse(403, "authorization failed!");
  
      const input = plainToClass(ProfileInput, event.body);
      const error = await AppValidationError(input);
      if (error) return ErrorResponse(404, error);
  
      await this.repository.editProfile(payload.user_id, input)
      return SuccessResponse({ message: 'profile updated successfully!'});
    } catch (error) {
      return ErrorResponse(500, error)
    }
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
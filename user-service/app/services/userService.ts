import { UserRepository } from "app/repository/userRepository";
import { SuccessResponse } from "../util/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class UserService {
  repository: UserRepository
  constructor(repository: UserRepository) {
    this.repository = repository
  }

  // User Creation, Login and Verification
  async CreateUser(event: APIGatewayProxyEventV2) {
    const body = event.body

    await this.repository.CreateUserOperations()
    return SuccessResponse({ message: 'response from create User'});
  }

  async LoginUser(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from User Login'});
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
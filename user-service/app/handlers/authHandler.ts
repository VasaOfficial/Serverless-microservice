import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { UserRepository } from 'app/repository/authRepository'
import { UserService } from 'app/services/authService'

const service = new UserService(new UserRepository())

export const SignUp = async (event: APIGatewayProxyEventV2) => {
  return service.CreateUser(event)
}

export const ValidateToken = async (event: APIGatewayProxyEventV2) => {
  return service.TokenVerification(event)
}

export const OAuthentication = async (event: APIGatewayProxyEventV2) => {
  return service.OAuthentication(event);
};

import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { AuthRepository } from 'app/repository/authRepository'
import { AuthService } from 'app/services/authService'

const service = new AuthService(new AuthRepository())

export const SignUp = async (event: APIGatewayProxyEventV2) => {
  return service.CreateUser(event)
}

export const ValidateToken = async (event: APIGatewayProxyEventV2) => {
  return service.TokenVerification(event)
}

export const OAuthentication = async (event: APIGatewayProxyEventV2) => {
  return service.OAuthentication(event);
};

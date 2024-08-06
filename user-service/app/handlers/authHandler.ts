import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { UserRepository } from 'app/repository/authRepository'
import { UserService } from 'app/services/authService'

const service = new UserService(new UserRepository())

export const SignUp = async (event: APIGatewayProxyEventV2) => {
  return service.CreateUser(event);
};

// export const Login = async (event: APIGatewayProxyEventV2) => {
//   return service.LoginUser(event);
// };

// export const Logout = async (event: APIGatewayProxyEventV2) => {
//   return service.LogoutUser(event);
// };

// export const ResetPassword = async (event: APIGatewayProxyEventV2) => {
//   return service.ResetPassword(event);
// };

// export const ValidateToken = async (event: APIGatewayProxyEventV2) => {
//   return service.ValidateToken(event);
// };

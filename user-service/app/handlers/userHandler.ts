import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserRepository } from "../repository/userRepository";
import { UserService } from "../services/userService";
import middy from "@middy/core";
import bodyParser from "@middy/http-json-body-parser";

const service = new UserService(new UserRepository());

export const SignUp = middy((event: APIGatewayProxyEventV2) => {
  return service.CreateUser(event);
}).use(bodyParser());

export const Login = middy((event: APIGatewayProxyEventV2) => {
  return service.LoginUser(event);
}).use(bodyParser());

export const ResetPassword = middy((event: APIGatewayProxyEventV2) => {
  return service.ResetPassword(event);
}).use(bodyParser());

// export const CreateProfile = middy((event: APIGatewayProxyEventV2) => {
//   return service.CreateProfile(event);
// }).use(bodyParser());

// export const EditProfile = middy((event: APIGatewayProxyEventV2) => {
//   return service.EditProfile(event);
// }).use(bodyParser());

// export const GetProfile = middy((event: APIGatewayProxyEventV2) => {
//   return service.GetProfile(event);
// }).use(bodyParser());
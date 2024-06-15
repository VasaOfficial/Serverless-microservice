import { container } from "tsyringe";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserService } from "../services/userService";
import { ErrorResponse } from "../util/response";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";

const service = container.resolve(UserService);

// User Creation, Login and Verification
export const Signup = middy((event: APIGatewayProxyEventV2) => {
  return service.CreateUser(event)
}).use(jsonBodyParser())

export const Login = middy((event: APIGatewayProxyEventV2) => {
  return service.LoginUser(event)
}).use(jsonBodyParser())

export const Verify =  middy((event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase()

  if(httpMethod === 'post') {
    return service.VerifyUser(event)
  } else if(httpMethod === 'get') {
    return service.GetVerificationToken(event)
  } else {
    return service.ResponseWithError(event)
  }
}).use(jsonBodyParser())

// User Profile
export const Profile = middy((event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase()

  if(httpMethod === 'post') {
    return service.CreateProfile(event)
  } else if(httpMethod === 'put') {
    return service.EditProfile(event)
  } else if(httpMethod === 'get') {
    return service.GetProfile(event)
  } else {
    return service.ResponseWithError(event)
  }
}).use(jsonBodyParser())

export const Cart = middy((event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase()

  if(httpMethod === 'post') {
    return service.CreateCart(event)
  } else if(httpMethod === 'put') {
    return service.UpdateCart(event)
  } else if(httpMethod === 'get') {
    return service.GetCart(event)
  } else {
    return service.ResponseWithError(event)
  }
}).use(jsonBodyParser())

export const Payment = middy((event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase()

  if(httpMethod === 'post') {
    return service.CreatePaymentMethod(event)
  } else if(httpMethod === 'put') {
    return service.UpdatePaymentMethod(event)
  } else if(httpMethod === 'get') {
    return service.GetPaymentMethod(event)
  } else {
    return service.ResponseWithError(event)
  }
}).use(jsonBodyParser())
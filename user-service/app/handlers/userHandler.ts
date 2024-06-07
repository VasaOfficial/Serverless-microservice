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

export const Verify = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase()

  if(httpMethod === 'post') {
    return service.CreateProfile(event)
  } else if(httpMethod === 'get') {
    return service.GetVerificationToken(event)
  } else {
    return ErrorResponse(404, "requested method is not supported") 
  }
}

// User Profile
export const Profile = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase()

  if(httpMethod === 'post') {
    return service.CreateProfile(event)
  } else if(httpMethod === 'put') {
    return service.EditProfile(event)
  } else if(httpMethod === 'get') {
    return service.GetProfile(event)
  } else {
    return ErrorResponse(404, "requested method is not supported") 
  }
}

export const Cart = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase()

  if(httpMethod === 'post') {
    return service.CreateCart(event)
  } else if(httpMethod === 'put') {
    return service.UpdateCart(event)
  } else if(httpMethod === 'get') {
    return service.GetCart(event)
  } else {
    return ErrorResponse(404, "requested method is not supported") 
  }
}

export const Payment = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase()

  if(httpMethod === 'post') {
    return service.CreatePaymentMethod(event)
  } else if(httpMethod === 'put') {
    return service.UpdatePaymentMethod(event)
  } else if(httpMethod === 'get') {
    return service.GetPaymentMethod(event)
  } else {
    return ErrorResponse(404, "requested method is not supported") 
  }
}
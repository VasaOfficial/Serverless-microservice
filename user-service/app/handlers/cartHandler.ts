// import { APIGatewayProxyEventV2 } from "aws-lambda";
// import { CartService } from "app/services/cartService";
// import { CartRepository } from "./../repository/cartRepository";

// const cartService = new CartService(new CartRepository());

// export const CreateCart = middy((event: APIGatewayProxyEventV2) => {
//   return cartService.CreateCart(event);
// }).use(bodyParser());

// export const DeleteCart = middy((event: APIGatewayProxyEventV2) => {
//   return cartService.DeleteCart(event);
// }).use(bodyParser());

// export const EditCart = middy((event: APIGatewayProxyEventV2) => {
//   return cartService.UpdateCart(event);
// }).use(bodyParser());

// export const GetCart = middy((event: APIGatewayProxyEventV2) => {
//   return cartService.GetCart(event);
// }).use(bodyParser());


// export const SignUp = async (event: APIGatewayProxyEventV2) => {
//   return service.CreateUser(event)
// }

// export const ValidateToken = async (event: APIGatewayProxyEventV2) => {
//   return service.TokenVerification(event)
// }

// export const OAuthentication = async (event: APIGatewayProxyEventV2) => {
//   return service.OAuthentication(event);
// };

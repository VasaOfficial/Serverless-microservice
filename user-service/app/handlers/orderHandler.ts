// import { APIGatewayProxyEventV2 } from "aws-lambda";
// import middy from "@middy/core";
// import bodyParser from "@middy/http-json-body-parser";
// import { CartService } from "app/services/cartService";
// import { CartRepository } from "./../repository/cartRepository";

// const cartService = new CartService(new CartRepository());

// export const CollectPayment = middy((event: APIGatewayProxyEventV2) => {
//   return cartService.CollectPayment(event);
// }).use(bodyParser());

// export const PlaceOrder = middy((event: APIGatewayProxyEventV2) => {
//   return cartService.PlaceOrder(event);
// }).use(bodyParser())
// import { ErrorResponse, SuccessResponse } from "../util/response";
// import { APIGatewayProxyEventV2 } from "aws-lambda";
// import { autoInjectable } from "tsyringe";
// import { plainToClass } from 'class-transformer'
// import { AppValidationError } from "../util/errors";
// import { VerifyToken } from "../util/password";
// import { CartRepository } from "../repository/cartRepository";
// import { CartInput, UpdateCartInput } from "../models/dto/CartInput";
// import { CartItemModel } from "../models/CartItemsModel";
// import { PullData } from "../message-queue";
// import aws from "aws-sdk";
// import { UserRepository } from "../repository/userRepository";
// import { APPLICATION_FEE, CreatePaymentSession, RetrievePayment, STRIPE_FEE } from "../util/payment";

// @autoInjectable()
// export class CartService {
//   repository: CartRepository
//   constructor(repository: CartRepository) {
//     this.repository = repository
//   }

//   async ResponseWithError(event: APIGatewayProxyEventV2) {
//     return ErrorResponse(404, "requested method is not supported!");
//   }

//   // Cart Section
//   async CreateCart(event: APIGatewayProxyEventV2) {
//     try {
//       const token = event.headers.authorization;
//       const payload = await VerifyToken(token);
//       if (!payload) return ErrorResponse(403, "authorization failed!");

//       const input = plainToClass(CartInput, event.body);
//       const error = await AppValidationError(input);
//       if (error) return ErrorResponse(404, error);

//       let currentCart = await this.repository.findShoppingCart(payload.user_id);
//       if (!currentCart)
//         currentCart = await this.repository.createShoppingCart(payload.user_id);

//       if (!currentCart) {
//         return ErrorResponse(500, "create cart is failed!");
//       }

//       // find the item if exist
//       let currentProduct = await this.repository.findCartItemByProductId(
//         input.productId
//       );
//       if (currentProduct) {
//         // if exist update the qty
//         await this.repository.updateCartItemByProductId(
//           input.productId,
//           (currentProduct.item_qty += input.qty)
//         );
//       } else {
//         // if does not call Product service to get product information
//         const { data, status } = await PullData({
//           action: "PULL_PRODUCT_DATA",
//           productId: input.productId,
//         });
//         console.log("Getting Product", data);
//         if (status !== 200) {
//           return ErrorResponse(500, "failed to get product data!");
//         }

//         let cartItem = data.data as CartItemModel;
//         cartItem.cart_id = currentCart.cart_id;
//         cartItem.item_qty = input.qty;
//         // Finally create cart item
//         await this.repository.createCartItem(cartItem);
//       }

//       // return all cart items to client
//       const cartItems = await this.repository.findCartItemsByCartId(
//         currentCart.cart_id
//       );

//       return SuccessResponse(cartItems);
//     } catch (error) {
//       console.log(error);
//       return ErrorResponse(500, error);
//     }
//   }

//   async GetCart(event: APIGatewayProxyEventV2) {
//     try {
//       const token = event.headers.authorization;
//       const payload = await VerifyToken(token);
//       if (!payload) return ErrorResponse(403, "authorization failed!");
//       const cartItems = await this.repository.findCartItems(payload.user_id)

//       const totalAmount = cartItems.reduce(
//         (sum, item) => sum + item.price * item.item_qty,
//         0
//       );
//       const appFee = APPLICATION_FEE(totalAmount) + STRIPE_FEE(totalAmount);

//       return SuccessResponse({ cartItems, totalAmount, appFee });
//     } catch (error) {
//       console.log(error);
//       return ErrorResponse(500, error);
//     }
//     return SuccessResponse({ message: 'response from Get Cart'});
//   }

//   async UpdateCart(event: APIGatewayProxyEventV2) {
//     try {
//       const token = event.headers.authorization;
//       const payload = await VerifyToken(token);
//       const cartItemId = Number(event.pathParameters.id);
//       if (!payload) return ErrorResponse(403, "authorization failed!");

//       const input = plainToClass(UpdateCartInput, event.body);
//       const error = await AppValidationError(input);
//       if (error) return ErrorResponse(404, error);

//       const cartItems = await this.repository.updateCartItemById(cartItemId, input.qty)

//       return SuccessResponse(cartItems);
//     } catch (error) {
//       console.log(error);
//       return ErrorResponse(500, error);
//     }
//   }

//   // delete cart item
//   async DeleteCart(event: APIGatewayProxyEventV2) {
//     try {
//       const token = event.headers.authorization;
//       const payload = await VerifyToken(token);
//       const cartItemId = Number(event.pathParameters.id);
//       if (!payload) return ErrorResponse(403, "authorization failed!");

//       const deletedItem = await this.repository.deleteCartItem(cartItemId)
//       return SuccessResponse(deletedItem);
//     } catch (error) {
//       console.log(error);
//       return ErrorResponse(500, error);
//     }
//   }

//   async CollectPayment(event: APIGatewayProxyEventV2) {
//     try {
//       const token = event.headers.authorization;
//       const payload = await VerifyToken(token);
//       if (!payload) return ErrorResponse(403, "authorization failed!");

//       const { stripe_id, email, phone } = await new UserRepository().getUserProfile(payload.user_id);
//       const cartItems = await this.repository.findCartItems(payload.user_id);

//       const total = cartItems.reduce(
//         (sum, item) => sum + item.price * item.item_qty,
//         0
//       );

//       const appFee = APPLICATION_FEE(total);
//       const stripeFee = STRIPE_FEE(total);
//       const amount = total + appFee + stripeFee;

//       // initialize Payment gateway
//       const { secret, publishableKey, customerId, paymentId } =
//         await CreatePaymentSession({
//           amount,
//           email,
//           phone,
//           customerId: stripe_id,
//         });

//       await new UserRepository().updateUserPayment({
//         userId: payload.user_id,
//         customerId,
//         paymentId,
//       });

//       return SuccessResponse({ secret, publishableKey });
//     } catch (error) {
//       console.log(error);
//       return ErrorResponse(500, error);
//     }
//   }

//   async PlaceOrder(event: APIGatewayProxyEventV2) {
//     // get cart items
//     const token = event.headers.authorization;
//     const payload = await VerifyToken(token);
//     if (!payload) return ErrorResponse(403, "authorization failed!");

//     const { payment_id } = await new UserRepository().getUserProfile(
//       payload.user_id
//     );

//     console.log(payment_id);

//     const paymentInfo = await RetrievePayment(payment_id);
//     console.log(paymentInfo);

//     if (paymentInfo.status === "succeeded") {
//       const cartItems = await this.repository.findCartItems(payload.user_id);

//       // // Send SNS topic to create Order [Transaction MS] => email to user
//       const params = {
//         Message: JSON.stringify({
//           userId: payload.user_id,
//           items: cartItems,
//           transaction: paymentInfo,
//         }),
//         TopicArn: process.env.SNS_TOPIC,
//         MessageAttributes: {
//           actionType: {
//             DataType: "String",
//             StringValue: "place_order",
//           },
//         },
//       };
//       const sns = new aws.SNS();
//       const response = await sns.publish(params).promise();
//       console.log(response);
//       console.log(JSON.stringify(params));
//       // update payment id = ""
//       // delete all cart items
//       return SuccessResponse({ msg: "success", params });
//     }

//     return ErrorResponse(503, new Error("payment failed!"));
//   }
// }

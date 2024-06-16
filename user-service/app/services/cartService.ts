import { ErrorResponse, SuccessResponse } from "../util/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { autoInjectable } from "tsyringe";
import { plainToClass } from 'class-transformer'
import { AppValidationError } from "../util/errors";
import { VerifyToken } from "../util/password";
import { CartRepository } from "../repository/cartRepository";
import { CartInput } from "../models/dto/CartInput";
import { CartItemModel } from "../models/CartItemsModel";
import { PullData } from "../message-queue";

@autoInjectable()
export class CartService {
  repository: CartRepository
  constructor(repository: CartRepository) {
    this.repository = repository
  }

  async ResponseWithError(event: APIGatewayProxyEventV2) {
    return ErrorResponse(404, "requested method is not supported!");
  }
  
  // Cart Section
  async CreateCart(event: APIGatewayProxyEventV2) {
    try {
      const token = event.headers.authorization;
      const payload = await VerifyToken(token);
      if (!payload) return ErrorResponse(403, "authorization failed!");

      const input = plainToClass(CartInput, event.body);
      const error = await AppValidationError(input);
      if (error) return ErrorResponse(404, error);

      let currentCart = await this.repository.findShoppingCart(payload.user_id);
      if (!currentCart)
        currentCart = await this.repository.createShoppingCart(payload.user_id);

      if (!currentCart) {
        return ErrorResponse(500, "create cart is failed!");
      }

      // find the item if exist
      let currentProduct = await this.repository.findCartItemByProductId(
        input.productId
      );
      if (currentProduct) {
        // if exist update the qty
        await this.repository.updateCartItemByProductId(
          input.productId,
          (currentProduct.item_qty += input.qty)
        );
      } else {
        // if does not call Product service to get product information
        const { data, status } = await PullData({
          action: "PULL_PRODUCT_DATA",
          productId: input.productId,
        });
        console.log("Getting Product", data);
        if (status !== 200) {
          return ErrorResponse(500, "failed to get product data!");
        }

        let cartItem = data.data as CartItemModel;
        cartItem.cart_id = currentCart.cart_id;
        cartItem.item_qty = input.qty;
        // Finally create cart item
        await this.repository.createCartItem(cartItem);
      }

      // return all cart items to client
      const cartItems = await this.repository.findCartItemsByCartId(
        currentCart.cart_id
      );

      return SuccessResponse(cartItems);
    } catch (error) {
      console.log(error);
      return ErrorResponse(500, error);
    }
  }

  async GetCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Get Cart'});
  }

  async UpdateCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Update Cart'});
  }

  async DeleteCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: 'response from Update Cart'});
  }
}
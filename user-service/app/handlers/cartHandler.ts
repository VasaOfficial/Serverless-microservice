import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { CartRepository } from 'app/repository/cartRepository'
import { CartService } from 'app/services/cartService'

const service = new CartService(new CartRepository())

export const AddCartItem = async (event: APIGatewayProxyEventV2) => {
  return service.AddCartItem(event)
}

export const GetCartItem = async (event: APIGatewayProxyEventV2) => {
  return service.GetCartItem(event);
};

export const RemoveCartItem = async (event: APIGatewayProxyEventV2) => {
  return service.RemoveCartItem(event)
}

export const UpdateCartItem = async (event: APIGatewayProxyEventV2) => {
  return service.UpdateCartItem(event);
};

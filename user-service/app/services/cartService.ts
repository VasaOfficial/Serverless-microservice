import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { autoInjectable } from 'tsyringe'
import { ErrorResponse, SuccessResponse } from 'app/util/response'
import { CartRepository } from 'app/repository/cartRepository'

@autoInjectable()
export class CartService {
  repository: CartRepository

  constructor(repository: CartRepository) {
    this.repository = repository
  }

  async ResponseWithError() {
    return ErrorResponse(404, 'requested method is not supported!')
  }

  async AddCartItem(event: APIGatewayProxyEventV2) {
    try {
      const { firebaseUid, destinationId, quantity } = JSON.parse(event.body || '{}')

      if (!firebaseUid || !destinationId || !quantity) {
        return ErrorResponse(400, 'firebaseUid, destinationId, and quantity are required')
      }

      const cartItem = await this.repository.addToCart({ firebaseUid, destinationId, quantity })

      return SuccessResponse(cartItem)
    } catch (error) {
      return ErrorResponse(500, error.message)
    }
  }

  async GetCartItem(event: APIGatewayProxyEventV2) {
    try {
      const { firebaseUid } = JSON.parse(event.body || '{}')

      if (!firebaseUid) {
        return ErrorResponse(400, 'firebaseUid is required')
      }

      const cartItems = await this.repository.getCartItems(firebaseUid)

      return SuccessResponse(cartItems)
    } catch (error) {
      return ErrorResponse(500, error.message)
    }
  }

  async UpdateCartItem(event: APIGatewayProxyEventV2) {
    try {
      const { firebaseUid, destinationId, quantity } = JSON.parse(event.body || '{}')

      if (!firebaseUid || !destinationId || !quantity) {
        return ErrorResponse(400, 'firebaseUid, destinationId, and quantity are required')
      }

      const result = await this.repository.updateCart({ firebaseUid, destinationId, quantity })

      return SuccessResponse(result)
    } catch (error) {
      return ErrorResponse(500, error.message)
    }
  }

  async RemoveCartItem(event: APIGatewayProxyEventV2) {
    try {
      const { firebaseUid, destinationId } = JSON.parse(event.body || '{}')

      if (!firebaseUid || !destinationId) {
        return ErrorResponse(400, 'firebaseUid and destinationId are required')
      }

      const result = await this.repository.removeFromCart({ firebaseUid, destinationId })

      return SuccessResponse(result)
    } catch (error) {
      return ErrorResponse(500, error.message)
    }
  }
}

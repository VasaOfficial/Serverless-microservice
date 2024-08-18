import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { autoInjectable } from 'tsyringe'
import { ErrorResponse, SuccessResponse } from 'app/util/response'
import { TransactionRepository } from 'app/repository/transactionRepository'
import Stripe from 'stripe';

@autoInjectable()
export class TransactionService {
  private stripe: Stripe;
  repository: TransactionRepository

  constructor(repository: TransactionRepository) {
    this.repository = repository
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2024-06-20',
    });
  }

  async ResponseWithError() {
    return ErrorResponse(404, 'requested method is not supported!')
  }

  async CreateOrder(event: APIGatewayProxyEventV2) {
    try {
      const { firebaseUid, cartItems } = JSON.parse(event.body || '{}');

      if (!firebaseUid || !cartItems || cartItems.length === 0) {
        return ErrorResponse(400, 'firebaseUid and cartItems are required');
      }

      const order = await this.repository.createOrder(firebaseUid, cartItems);

      return SuccessResponse(order);
    } catch (error) {
      return ErrorResponse(500, error.message);
    }
  }

  async ProcessPayment(event: APIGatewayProxyEventV2) {
    try {
      const { orderId, paymentMethodId } = JSON.parse(event.body || '{}');

      if (!orderId || !paymentMethodId) {
        return ErrorResponse(400, 'orderId and paymentMethodId are required');
      }

      const order = await this.repository.getOrderById(orderId);

      if (!order) {
        return ErrorResponse(404, 'Order not found');
      }

      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: order.totalAmount,
        currency: 'usd',
        payment_method: paymentMethodId,
        confirm: true,
      });

      await this.repository.updateOrderStatus(orderId, 'PAID');

      return SuccessResponse(paymentIntent);
    } catch (error) {
      return ErrorResponse(500, error.message);
    }
  }
}

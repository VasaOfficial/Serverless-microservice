import prisma from 'app/util/prismaClient'

export class TransactionRepository {
  constructor() {}

  async createOrder(firebaseUid: string, cartItems: any[]) {
    try {
      const totalAmount = cartItems.reduce((sum, item) => sum + item.quantity * item.destination.price, 0);

      const order = await prisma.order.create({
        data: {
          userId: firebaseUid,
          totalAmount,
          cartItems: {
            connect: cartItems.map((item) => ({ id: item.id })),
          },
        },
        include: {
          cartItems: true,
        },
      });

      return order;
    } catch (error) {
      throw new Error(`Failed to create order: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getOrderById(orderId: number) {
    try {
      const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: { cartItems: true },
      });
      return order;
    } catch (error) {
      throw new Error(`Failed to retrieve order: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }

  async updateOrderStatus(orderId: number, status: string) {
    try {
      const updatedOrder = await prisma.order.update({
        where: { id: orderId },
        data: { status },
      });
      return updatedOrder;
    } catch (error) {
      throw new Error(`Failed to update order status: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }
}

import prisma from "app/util/db-connection"

export class ProductRepository {
  constructor() {}

  // pagination
  async getAllProducts() {
    return await prisma.destination.findMany()
  }

  async getProductById(productId: number) {
    return await prisma.destination.findUnique({
      where: {
        id: productId
      },
    })
  }
}

import prisma from 'app/util/db-connection'

export class ProductRepository {
  constructor() {}

  // pagination
  async getAllProducts() {
    return await prisma.destination.findMany()
  }

  async getProductById(productId: number) {
    return await prisma.destination.findUnique({
      where: {
        id: productId,
      },
    })
  }

  async getTopOffers() {
    return await prisma.topOffers.findMany()
  }

  async searchProducts(filters: any) {
    return prisma.destination.findMany({
      where: {
        ...filters,
      },
      include: {
        country: {
          include: {
            continent: true,
          },
        },
      },
    })
  }
}

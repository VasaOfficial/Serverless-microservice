// import { ProductDoc, products } from '../models'

export class ProductRepository {
  constructor() {}

  // pagination
  async getAllProducts(offset = 0, pages?: number) {
    return products
      .find()
      .skip(offset)
      .limit(pages ? pages : 10)
  }

  async getProductById(id: string) {
    return (await products.findById(id)) as ProductDoc
  }
}

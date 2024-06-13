import { ProductInput } from "../dto/product-input";
import { ProductDoc, products } from "../models/product-models";

export class ProductRepository {
  constructor() {}

  async createProduct({
    name,
    description,
    category_id,
    price,
    image_url,
  }: ProductInput) {
    return products.create({
      name,
      description,
      category_id,
      price,
      image_url,
      availability: true
    })
  }

  // pagination
  async getAllProducts(offset = 0, pages?: number) {
    return products.find().skip(offset).limit(pages ? pages : 10)
  }

  async getProductById(id: string) {
    return products.findById(id)
  }

  async updateProduct({
    id,
    name,
    description,
    price,
    category_id,
    image_url,
    availability,
  }: ProductInput) {
    let existingProduct = (await products.findById(id)) as ProductDoc;
    existingProduct.name = name;
    existingProduct.description = description;
    existingProduct.price = price;
    existingProduct.category_id = category_id;
    existingProduct.image_url = image_url;
    existingProduct.availability = availability;
    return existingProduct.save();
  }

  async deleteProduct(id: string) {
    return products.deleteOne({ _id: id })
  }

}
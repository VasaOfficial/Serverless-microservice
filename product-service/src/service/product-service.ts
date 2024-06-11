import { ProductRepository } from "../repository/product-repository";
import { SuccessResponse } from "../util/response";

export class ProductService {
  _repository: ProductRepository
  constructor(repository: ProductRepository) {
    this._repository = repository
  }

  async createProduct() {
    return SuccessResponse({ message: 'Product created successfully!'});
  }

  async getProducts() {
    return SuccessResponse({ message: 'get products successful!'});
  }

  async getProduct() {
    return SuccessResponse({ message: 'get product by id successful!'});
  }

  async editProduct() {
    return SuccessResponse({ message: 'edit product successful!'});
  }

  async deleteProduct() {
    return SuccessResponse({ message: 'edit product successful!'});
  }
}
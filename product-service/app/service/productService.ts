import { APIGatewayEvent, APIGatewayProxyEventV2 } from 'aws-lambda'
import { ProductRepository } from 'app/repository/productRepository'
import { ErrorResponse, SuccessResponse } from '../util/response'
import { plainToClass } from 'class-transformer'
import { AppValidationError } from '../util/errors'
import { ServiceInput } from 'app/models/dto/service-input'

export class ProductService {
  _repository: ProductRepository
  constructor(repository: ProductRepository) {
    this._repository = repository
  }

  async ResponseWithError(error: APIGatewayEvent) {
    return ErrorResponse(404, new Error('method not allowed'))
  }

  async GetProducts(event: APIGatewayProxyEventV2) {
    const data = await this._repository.getAllProducts()
    return SuccessResponse(data)
  }

  async GetProduct(event: APIGatewayProxyEventV2) {
    const productId = event.pathParameters?.id
    if (!productId) return ErrorResponse(404, 'product id not found!')

    const data = await this._repository.getProductById(productId)

    if (data === null) return ErrorResponse(404, 'Product not found')
    return SuccessResponse(data)
  }
}

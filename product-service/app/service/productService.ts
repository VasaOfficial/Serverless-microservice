import { APIGatewayEvent, APIGatewayProxyEventV2 } from 'aws-lambda'
import { ProductRepository } from 'app/repository/productRepository'
import { ErrorResponse, SuccessResponse } from '../util/response'
import { plainToClass } from 'class-transformer'
import { AppValidationError } from '../util/errors'

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

    const data = await this._repository.getProductById(parseInt(productId))

    if (data === null) return ErrorResponse(404, 'Product not found')
    return SuccessResponse(data)
  }

  async GetTopOffers(event: APIGatewayProxyEventV2) {
    const data = await this._repository.getTopOffers()
    return SuccessResponse(data)
  }

  async SearchProducts(event: APIGatewayProxyEventV2) {
    const { continents, date, price } = event.queryStringParameters || {}

    const filters: any = {}

    if (continents) {
      // Assuming continents is a comma-separated list
      const continentNames = continents.split(',')

      filters.country = {
        continent: {
          name: {
            in: continentNames,
          },
        },
      }
    }

    // Price filter
    if (price) {
      filters.price = {
        lte: parseInt(price, 10),
      }
    }

    try {
      const data = await this._repository.searchProducts(filters)

      if (data.length === 0) return ErrorResponse(404, 'No products found')
      return SuccessResponse(data)
    } catch (error) {
      return ErrorResponse(500, 'Internal Server Error')
    }
  }
}

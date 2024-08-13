import { APIGatewayEvent, APIGatewayProxyEventV2 } from 'aws-lambda'
import { ProductRepository } from 'app/repository/productRepository'
import { ErrorResponse, SuccessResponse } from '../util/response'
// import { plainToClass } from 'class-transformer'
// import { AppValidationError } from '../util/errors'
import { parse, isWithinInterval } from 'date-fns'

function parseDateRange(dateRange: string) {
  const [start, end] = dateRange.split(' - ')
  return {
    start: parse(start, 'MMM d', new Date()),
    end: parse(end, 'MMM d', new Date()),
  }
}

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

    // Handle date filter
    let startDate: Date | null = null
    let endDate: Date | null = null

    if (date) {
      const [startDateStr, endDateStr] = date.split(':')
      startDate = new Date(startDateStr)
      endDate = new Date(endDateStr)
    }

    try {
      const data = await this._repository.searchProducts(filters)

      // If date range is provided filter the results in-memory
      if (startDate && endDate) {
        const filteredData = data.filter((product) => {
          const { start, end } = parseDateRange(product.dateRange)
          // Check if the destinations dateRange overlaps with the search date range
          return (
            isWithinInterval(startDate, { start, end }) ||
            isWithinInterval(endDate, { start, end }) ||
            (startDate < end && endDate > start)
          ) // Additional overlap check
        })

        if (filteredData.length === 0) return ErrorResponse(404, 'No products found')
        return SuccessResponse(filteredData)
      }

      if (data.length === 0) return ErrorResponse(404, 'No products found')
      return SuccessResponse(data)
    } catch (error) {
      return ErrorResponse(500, 'Internal Server Error')
    }
  }
}

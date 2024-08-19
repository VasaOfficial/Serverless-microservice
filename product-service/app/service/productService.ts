import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { ProductRepository } from 'app/repository/productRepository'
import { ErrorResponse, SuccessResponse } from 'app/util/response'
import { plainToClass } from 'class-transformer'
import { AppValidationError } from 'app/util/errors'
import { parse, isWithinInterval } from 'date-fns'
import { autoInjectable } from 'tsyringe'
import { GetProductInput, SearchProductsInput } from 'app/models/dto/ProductInput'

function parseDateRange(dateRange: string) {
  const [start, end] = dateRange.split(' - ')
  return {
    start: parse(start, 'MMM d', new Date()),
    end: parse(end, 'MMM d', new Date()),
  }
}

@autoInjectable()
export class ProductService {
  _repository: ProductRepository
  constructor(repository: ProductRepository) {
    this._repository = repository
  }

  async ResponseWithError() {
    return ErrorResponse(404, new Error('method not allowed'))
  }

  async GetProducts(event: APIGatewayProxyEventV2) {
    try {
      const data = await this._repository.getAllProducts()
      return SuccessResponse(data)
    } catch (error) {
      return ErrorResponse(500, error.message)
    }
  }

  async GetProduct(event: APIGatewayProxyEventV2) {
    try {
      const parsedParams = plainToClass(GetProductInput, event.pathParameters || {})
      const error = await AppValidationError(parsedParams)
      if (error) return ErrorResponse(400, error)

      const { productId } = parsedParams

      if (!productId) return ErrorResponse(404, 'product id not found!')

      const data = await this._repository.getProductById(parseInt(productId))

      return SuccessResponse(data)
    } catch (error) {
      return ErrorResponse(500, error.message)
    }
  }

  async GetTopOffers(event: APIGatewayProxyEventV2) {
    try {
      const data = await this._repository.getTopOffers()
      return SuccessResponse(data)
    } catch (error) {
      return ErrorResponse(500, error.message)
    }
  }

  async SearchProducts(event: APIGatewayProxyEventV2) {
    try {
      const parsedQuery = plainToClass(SearchProductsInput, event.queryStringParameters || {})
      const error = await AppValidationError(parsedQuery)
      if (error) return ErrorResponse(400, error)

      const { continents, date, price } = parsedQuery

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
          lte: price,
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
      return ErrorResponse(500, error.message)
    }
  }
}

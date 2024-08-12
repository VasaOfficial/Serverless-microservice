import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { ProductService } from 'app/service/productService'
import { ProductRepository } from 'app/repository/productRepository'

const service = new ProductService(new ProductRepository())

export const GetProducts = async (event: APIGatewayProxyEventV2) => {
  return service.GetProducts(event)
}

export const GetProduct = async (event: APIGatewayProxyEventV2) => {
  return service.GetProduct(event)
}

export const GetTopOffers = async (event: APIGatewayProxyEventV2) => {
  return service.GetTopOffers(event)
}

export const SearchProducts = async (event: APIGatewayProxyEventV2) => {
  return service.SearchProducts(event)
}

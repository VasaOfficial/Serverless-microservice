import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { ErrorResponse } from "./util/response";
import { ProductService } from "./service/product-service";
import { ProductRepository } from "./repository/product-repository";
import './util'

const service = new ProductService(new ProductRepository())

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const isRiot = event.pathParameters === null

  switch(event.httpMethod.toLowerCase()) {
    case 'post':
      if(isRiot) {
        return service.createProduct(event)
      } 
      break
    case 'get':
      return isRiot ? service.getProducts(event) : service.getProduct(event)
    case 'put':
      if (!isRiot) {
        return service.editProduct(event)
      }
    case 'delete':
      if(!isRiot) {
        return service.deleteProduct(event)
      }
  }

  return ErrorResponse(404, 'request method not supported')
}
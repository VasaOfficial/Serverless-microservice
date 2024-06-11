import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { ErrorResponse } from "./util/response";
import { ProductService } from "./service/product-service";
import { ProductRepository } from "./repository/product-repository";

const service = new ProductService(new ProductRepository())

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const isRiot = event.pathParameters === null

  switch(event.httpMethod.toLowerCase()) {
    case 'post':
      if(isRiot) {
        return service.createProduct()
      } 
      break
    case 'get':
      return isRiot ? service.getProducts() : service.getProduct()
    case 'put':
      if (!isRiot) {
        return service.editProduct()
      }
    case 'delete':
      if(!isRiot) {
        return service.deleteProduct()
      }
  }

  return ErrorResponse(404, 'request method not supported')
}
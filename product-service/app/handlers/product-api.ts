// import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
// import { ProductService } from '../service/product-service'
// import { ProductRepository } from '../repository/product-repository'
// import '../utility'
// import jsonBodyParser from '@middy/http-json-body-parser'
// import middy from '@middy/core'

// const service = new ProductService(new ProductRepository())

// export const createProduct = middy(
//   async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
//     return service.createProduct(event)
//   },
// ).use(jsonBodyParser())

// export const getProduct = middy(
//   async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
//     return service.getProduct(event)
//   },
// ).use(jsonBodyParser())

// export const getProducts = middy(
//   async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
//     return service.getProducts(event)
//   },
// ).use(jsonBodyParser())

// export const getSellerProducts = middy(
//   async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
//     return service.getSellerProducts(event)
//   },
// ).use(jsonBodyParser())

// export const editProduct = middy(
//   async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
//     return service.editProduct(event)
//   },
// ).use(jsonBodyParser())

// export const deleteProduct = middy(
//   async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
//     return service.deleteProduct(event)
//   },
// ).use(jsonBodyParser())

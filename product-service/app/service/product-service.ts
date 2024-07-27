// import { APIGatewayEvent, APIGatewayProxyEvent } from 'aws-lambda'
// import { ProductRepository } from '../repository/product-repository'
// import { ErrorResponse, SuccessResponse } from '../util/response'
// import { plainToClass } from 'class-transformer'
// import { AppValidationError } from '../util/errors'
// import { ProductInput } from '../models/dto/product-input'
// import { CategoryRepository } from '../repository/category-repository'
// import { ServiceInput } from '../models/dto/service-input'
// import { AuthUser } from '../util/auth'

// export class ProductService {
//   _repository: ProductRepository
//   constructor(repository: ProductRepository) {
//     this._repository = repository
//   }

//   async ResponseWithError(error: APIGatewayEvent) {
//     return ErrorResponse(404, new Error('method not allowed'))
//   }

//   async authorizedUser(user_id: number, productId: string) {
//     const product = await this._repository.getProductById(productId)
//     if (!product) return false
//     return Number(user_id) === Number(product.seller_id)
//   }

//   async createProduct(event: APIGatewayEvent) {
//     // validate authorize user
//     const token = event.headers.Authorization
//     const user = await AuthUser(token)
//     if (!user) return ErrorResponse(403, 'authorization failed')

//     if (user.user_type.toUpperCase() !== 'SELLER') {
//       return ErrorResponse(403, 'you need to join the seller program to create product')
//     }

//     const input = plainToClass(ProductInput, event.body)
//     const error = await AppValidationError(input)
//     if (error) return ErrorResponse(404, error)

//     const data = await this._repository.createProduct({
//       ...input,
//       seller_id: user.user_id,
//     })

//     await new CategoryRepository().addItem({
//       id: input.category_id,
//       products: [data.id],
//     })
//     return SuccessResponse(data)
//   }

//   async getProducts(event: APIGatewayEvent) {
//     const data = await this._repository.getAllProducts()
//     return SuccessResponse(data)
//   }

//   async getProduct(event: APIGatewayEvent) {
//     const productId = event.pathParameters?.id
//     if (!productId) return ErrorResponse(404, 'product id not found!')

//     const data = await this._repository.getProductById(productId)

//     if (data === null) return ErrorResponse(404, 'Product not found')
//     return SuccessResponse(data)
//   }

//   async getSellerProducts(event: APIGatewayEvent) {
//     const token = event.headers.Authorization
//     const user = await AuthUser(token)
//     if (!user) return ErrorResponse(403, 'authorization failed')

//     if (user.user_type.toUpperCase() !== 'SELLER') {
//       return ErrorResponse(403, 'you need to join the seller program to manage product')
//     }

//     const data = await this._repository.getAllSellerProducts(user.user_id)
//     return SuccessResponse(data)
//   }

//   async editProduct(event: APIGatewayEvent) {
//     // validate authorize user
//     const token = event.headers.Authorization
//     const user = await AuthUser(token)
//     if (!user) return ErrorResponse(403, 'authorization failed')

//     if (user.user_type.toUpperCase() !== 'SELLER') {
//       return ErrorResponse(403, 'you need to join the seller program to manage product')
//     }

//     const productId = event.pathParameters?.id
//     if (!productId) return ErrorResponse(403, 'please provide product id')

//     const input = plainToClass(ProductInput, event.body)
//     const error = await AppValidationError(input)
//     if (error) return ErrorResponse(404, error)

//     const isAuthorized = await this.authorizedUser(user.user_id, productId)
//     if (!isAuthorized) return ErrorResponse(403, 'you are not authorized to edit this product')

//     input.id = productId
//     const data = await this._repository.updateProduct(input)

//     return SuccessResponse(data)
//   }

//   async deleteProduct(event: APIGatewayEvent) {
//     // validate authorize user
//     const token = event.headers.Authorization
//     const user = await AuthUser(token)
//     if (!user) return ErrorResponse(403, 'authorization failed')

//     if (user.user_type.toUpperCase() !== 'SELLER') {
//       return ErrorResponse(403, 'you need to join the seller program to manage product')
//     }

//     const productId = event.pathParameters?.id
//     if (!productId) return ErrorResponse(403, 'please provide product id')

//     const isAuthorized = await this.authorizedUser(user.user_id, productId)
//     if (!isAuthorized) return ErrorResponse(403, 'you are not authorized to delete this product')

//     const { category_id, deleteResult } = await this._repository.deleteProduct(productId)

//     await new CategoryRepository().removeItem({
//       id: category_id,
//       products: [productId],
//     })
//     return SuccessResponse(deleteResult)
//   }

//   // http calls // later stage will convert this thing to RPC & Queue
//   async handleQueueOperation(event: APIGatewayProxyEvent) {
//     const input = plainToClass(ServiceInput, event.body)
//     const error = await AppValidationError(input)
//     if (error) return ErrorResponse(404, error)

//     // get product from product repo
//     const { _id, name, price, image_url } = await this._repository.getProductById(input.productId)

//     return SuccessResponse({
//       product_id: _id,
//       product_name: name,
//       product_price: price,
//       product_image_url: image_url,
//     })
//   }
// }

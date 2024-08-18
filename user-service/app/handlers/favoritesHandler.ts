import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { FavoritesRepository } from 'app/repository/favoritesRepository'
import { FavoritesService } from 'app/services/favoritesService'

const service = new FavoritesService(new FavoritesRepository())


export const AddFavorites = async (event: APIGatewayProxyEventV2) => {
  return service.AddFavorites(event)
}

// export const GetFavorites = async (event: APIGatewayProxyEventV2) => {
//   return service.GetFavorites(event)
// }

// export const DeleteFavorites = async (event: APIGatewayProxyEventV2) => {
//   return service.DeleteFavorites(event)
// }

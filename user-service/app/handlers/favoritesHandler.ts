import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { UserRepository } from 'app/repository/authRepository'
import { UserService } from 'app/services/favoritesService'

const service = new UserService(new UserRepository())

export const GetFavorites = async (event: APIGatewayProxyEventV2) => {
  return service.GetFavorites(event)
}

export const AddFavorites = async (event: APIGatewayProxyEventV2) => {
  return service.AddFavorites(event)
}

export const DeleteFavorites = async (event: APIGatewayProxyEventV2) => {
  return service.DeleteFavorites(event);
};

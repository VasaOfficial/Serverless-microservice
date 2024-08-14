import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { autoInjectable } from 'tsyringe'
// import { plainToClass } from 'class-transformer'
import { ErrorResponse, SuccessResponse } from '../util/response'
import { UserRepository } from '../repository/favoritesRepository'

@autoInjectable()
export class UserService {
  repository: UserRepository

  constructor(repository: UserRepository) {
    this.repository = repository
  }

  async ResponseWithError() {
    return ErrorResponse(404, 'requested method is not supported!')
  }

  async AddFavorites(event: APIGatewayProxyEventV2) {
    try {
      const { firebaseUid, destinationId } = JSON.parse(event.body || '{}')

      if(!firebaseUid || !destinationId) {
        return ErrorResponse(400, 'firebaseUid and destinationId are required')
      }

      const favorite = await this.repository.addFavorite(firebaseUid, destinationId)

      return SuccessResponse(favorite)
    } catch (error) {
      return ErrorResponse(500, error.message);
    }
  }

  async GetFavorites(event: APIGatewayProxyEventV2) {
    const { firebaseUid } = JSON.parse(event.body || '{}')
    if (!firebaseUid) return ErrorResponse(404, 'Uid is required')

    try {
      const favorites = await this.repository.getFavorites(firebaseUid)

      if (!firebaseUid || Object.keys(favorites).length === 0) {
        return ErrorResponse(404, 'No favorites found for this user')
      }

      return SuccessResponse(favorites)
    } catch (error) {
      return ErrorResponse(500, `Failed to retrieve favorites: ${error.message}`);
    }
  }

  // async DeleteFavorites(event: APIGatewayProxyEventV2) {
  //   const userId = event.requestContext.authorizer?.userId; // Assuming userId is passed via authorizer
  //   const { destinationId } = JSON.parse(event.body || '{}');

  //   if (!userId || !destinationId) {
  //     return ErrorResponse(400, 'userId and destinationId are required');
  //   }

  //   // Check if the favorite exists
  //   const existingFavorite = await this.repository.getFavorite(userId, destinationId);

  //   if (!existingFavorite) {
  //     return ErrorResponse(404, 'Favorite not found');
  //   }

  //   // Delete favorite
  //   await this.repository.deleteFavorite(userId, destinationId);

  //   return SuccessResponse({ message: 'Favorite deleted successfully' });
  // }

}

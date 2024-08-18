import prisma from 'app/util/prismaClient'
import { FavoriteModel } from 'app/models/FavoriteModel'

export class FavoritesRepository {
  constructor() {}

  async addFavorite({ firebaseUid, destinationId }: FavoriteModel) {
    try {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { firebaseUid: firebaseUid },
        include: {
          Favorite: true,
        },
      });

      if (!user) {
        throw new Error('User does not exist');
      }


      if (user.Favorite.length >= 15) {
        throw new Error('You can only add up to 15 items to your favorites');
      }

      // Check if destination exists
      const destinationExists = await prisma.destination.findUnique({
        where: { id: destinationId },
      });

      if (!destinationExists) {
        throw new Error('Invalid destination ID');
      }

      // Check if favorite already exists
      const existingFavorite = await prisma.favorite.findFirst({
        where: {
            userId: firebaseUid,
            destinationId: destinationId,
        },
      });

      if (existingFavorite) {
        throw new Error('Favorite already exists');
      }

      // Create new favorite
      const favorite = await prisma.favorite.create({
        data: {
          userId: firebaseUid,
          destinationId: destinationId,
        },
        include: {
          destination: true,
        },
      });

      return favorite;
    } catch (error) {
      throw new Error(`Failed to add favorite: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getFavorites({ firebaseUid }: FavoriteModel) {
    try {
      const user = await prisma.user.findUnique({
        where: { firebaseUid },
        include: {
          Favorite: {
            include: {
              destination: true,
            },
          },
        },
      });

      return user?.Favorite.map((favorite) => favorite.destination) || [];
    } catch (error) {
      throw new Error(`Failed to retrieve favorites: ${error.message}`);
    } finally {
      await prisma.$disconnect()
    }
  }

  async deleteFavorite({ firebaseUid, destinationId }: FavoriteModel) {
    try {
      // Check if the favorite exists
      const existingFavorite = await prisma.favorite.findFirst({
        where: {
            userId: firebaseUid,
            destinationId: destinationId,
        },
      });

      if (!existingFavorite) {
        throw new Error('Favorite does not exist');
      }

      // Delete the favorite
      await prisma.favorite.delete({
        where: {
          id: existingFavorite.id,
        },
      });

      return { message: 'Favorite removed successfully' };
    } catch (error) {
      throw new Error(`Failed to remove favorite: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }
}
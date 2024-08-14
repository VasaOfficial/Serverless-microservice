//import { UserModel } from '../models/UserModel'
import prisma from '../util/prismaClient'

export class UserRepository {
  constructor() {}

  async addFavorite(firebaseUid: string, destinationId: number) {
    try {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { firebaseUid: firebaseUid },
      });

      if (!user) {
        throw new Error('User does not exist');
      }

      // Check if destination exists
      const destinationExists = await prisma.destination.findUnique({
        where: { id: destinationId },
      });

      if (!destinationExists) {
        throw new Error('Invalid destination ID');
      }

      // Check if favorite already exists
      const existingFavorite = await prisma.favorite.findUnique({
        where: {
          userId_destinationId: {
            userId: firebaseUid,
            destinationId: destinationId,
          },
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

  async getFavorites(firebaseUid: string) {
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

  async deleteFavorite(firebaseUid: string, destinationId: number) {
    try {
      // Check if the favorite exists
      const existingFavorite = await prisma.favorite.findUnique({
        where: {
          userId_destinationId: {
            userId: firebaseUid,
            destinationId: destinationId,
          },
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
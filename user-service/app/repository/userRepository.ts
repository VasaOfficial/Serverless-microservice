import { UserModel } from "../models/UserModel"
import prisma  from "../util/prismaClient"

export class UserRepository {
  constructor() {}

  async createAccount({ phone, email, password, salt, userType }: UserModel) {
    try {
      const newUser = await prisma.user.create({
        data: {
          email,
          password,
          salt,
          phone,
          userType,
        },
      });
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAccount(email: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }

  async updateVerificationCode(userId: number, code: number, expiry: Date) {
    try {
      const updatedUser = await prisma.user.update({
        where: {
          user_id: userId,
        },
        data: {
          verification_code: code,
          expiry: expiry,
        },
      });
      return updatedUser;
    } catch (error) {
      console.error('Error updating verification code:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }

  async updateVerifyUser(userId: string) {
    try {
      // Check if the user is already verified before attempting to update
      const user = await prisma.user.findUnique({
        where: {
          user_id: parseInt(userId)
        }
      });
  
      if (!user) {
        throw new Error("User not found");
      }
  
      // If user is not verified, update the verification status
      if (!user.verified) {
        const updatedUser = await prisma.user.update({
          where: {
            user_id: parseInt(userId)
          },
          data: {
            verified: true
          }
        });
        return updatedUser;
      } else {
        throw new Error("User already verified");
      }
    } catch (error) {
      console.error('Error updating verification status:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  
}
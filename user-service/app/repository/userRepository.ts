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
    return await prisma.user.update({
      where: { 
        user_id: parseInt(userId), 
        verified: false 
      },
      data: {
        verified: true
      }
    });
  }
}
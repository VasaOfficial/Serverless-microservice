import { UserModel } from "../models/UserModel"
import prisma  from "../util/prismaClient"

export class UserRepository {
  constructor() {}

  async createAccount({ email, password, salt, phone, userType }: UserModel) {
    // DB Operations using Prisma
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
      return newUser as UserModel;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }

  async findAccount(email: string) {
    // DB Operations using Prisma
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      return user as UserModel;
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
}
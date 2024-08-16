import { UserModel } from 'app/models/UserModel'
import prisma from 'app/util/prismaClient'

export class AuthRepository {
  constructor() {}

  async createAccount({ email, firebaseUid }: UserModel) {
    try {
      const newUser = await prisma.user.create({
        data: {
          email: email,
          firebaseUid: firebaseUid,
        },
      })
      return newUser
    } catch (error) {
      console.error('Error creating user:', error)
      throw error
    } finally {
      await prisma.$disconnect()
    }
  }

  async findUserByUid(uid: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          firebaseUid: uid,
        },
      })
      return user
    } catch (error) {
      console.error('Error finding user:', error)
      throw error
    } finally {
      await prisma.$disconnect()
    }
  }
}

//import { ProfileInput } from '../models/dto/AddressInput'
import { UserModel } from '../models/UserModel'
import prisma from '../util/prismaClient'

export class UserRepository {
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
        }
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

import { ProfileInput } from "../models/dto/AddressInput";
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

  async updateVerifyUser(userId: number) {
    try {
      // Check if the user is already verified before attempting to update
      const user = await prisma.user.findUnique({
        where: {
          user_id: userId
        }
      });
  
      if (!user) {
        throw new Error("User not found");
      }
  
      // If user is not verified, update the verification status
      if (!user.verified) {
        const updatedUser = await prisma.user.update({
          where: {
            user_id: userId
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

  async updateUser(userId: number, firstName: string, lastName: string, userType: string) {
    try {
      const updatedUser = await prisma.user.update({
        where: { user_id: userId },
        data: { first_name: firstName, last_name: lastName, userType: userType }
      });
  
      if (updatedUser) return updatedUser;
  
      throw new Error("User not found");
    }
    catch (error) {
      console.error('Error updating user:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  
  async createProfile(
    userId: number,
    {
      firstName,
      lastName,
      userType,
      address: { city, country, addressLine1, addressLine2, post_code },
    }: ProfileInput
  ) {
    try {
      // Update the user's profile information
      const updatedUser = await this.updateUser(userId, firstName, lastName, userType);

      // Create the address associated with the user
      const newAddress = await prisma.address.create({
        data: {
          user_id: userId,
          city: city,
          country: country,
          address_line1: addressLine1,
          address_line2: addressLine2,
          post_code: post_code,
        },
      });

      return { user: updatedUser, address: newAddress };
    } catch (error) {
      console.error('Error creating profile:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }

  async getUserProfile(user_id: number) {
    try {
      // Fetch user details
      const user = await prisma.user.findUnique({
        where: {
          user_id,
        },
        select: {
          first_name: true,
          last_name: true,
          email: true,
          phone: true,
          userType: true,
          verified: true,
          address: {
            select: {
              id: true,
              city: true,
              country: true,
              address_line1: true,
              address_line2: true,
              post_code: true,
            },
          },
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }

  async editProfile(
    userId: number,
    {
      firstName,
      lastName,
      userType,
      address: { city, country, addressLine1, addressLine2, post_code, id },
    }: ProfileInput
  ) {
    try {
      await this.updateUser(userId, firstName, lastName, userType);
      // Update the address associated with the user
      const updatedAddress = await prisma.address.update({
        where: {
          id: userId,
        },
        data: {
          id: id,
          city: city,
          country: country,
          address_line1: addressLine1,
          address_line2: addressLine2,
          post_code: post_code,
        },
      });

      return { address: updatedAddress };
    } catch (error) {
      console.error('Error creating profile:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
}
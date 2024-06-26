import prisma from '../util/prismaClient';
import { UserModel } from '../models/UserModel';
import { AddressInput } from '../models/dto/AddressInput';
import { PaymentMethodInput, SellerProgramInput } from '../models/dto/JoinSellerProgramInput';

export class SellerRepository {
  async checkEnrolledProgram(userId: number): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: {
        user_id: userId,
        userType: 'SELLER'
      }
    });
    return user !== null;
  }

  async updateProfile(input: { firstName: string; lastName: string; phoneNumber: string; user_id: number; }): Promise<UserModel | false> {
    const user = await prisma.user.update({
      where: { user_id: input.user_id },
      data: {
        first_name: input.firstName,
        last_name: input.lastName,
        phone: input.phoneNumber,
        userType: 'SELLER'
      }
    });
    return user ? user : false;
  }

  async updateAddress(input: AddressInput & { user_id: number }) {
    const address = await prisma.address.upsert({
      where: { id: input.user_id },
      update: {
        address_line1: input.addressLine1,
        address_line2: input.addressLine2,
        city: input.city,
        post_code: input.post_code,
        country: input.country
      },
      create: {
        address_line1: input.addressLine1,
        address_line2: input.addressLine2,
        city: input.city,
        post_code: input.post_code,
        country: input.country,
        user_id: input.user_id
      }
    });
    return address;
  }

  async createPaymentMethod(input: SellerProgramInput & { user_id: number }) {
    const paymentMethod = await prisma.paymentMethod.create({
      data: {
        bank_account: input.bankAccountNumber,
        swift_code: input.swiftCode,
        payment_type: input.paymentType,
        user_id: input.user_id
      }
    });
    return paymentMethod !== null;
  }

  async getPaymentMethods(userId: number) {
    const paymentMethod = await prisma.paymentMethod.findMany({
      where: { user_id: userId }
    });
    if (paymentMethod.length < 1) {
      throw new Error("Payment methods do not exist!");
    }
    return paymentMethod[0];
  }

  async updatePaymentMethod(input: PaymentMethodInput & { payment_id: number; user_id: number }) {
    const paymentMethod = await prisma.paymentMethod.updateMany({
      where: {
        id: input.payment_id,
        user_id: input.user_id
      },
      data: {
        bank_account: input.bankAccountNumber,
        swift_code: input.swiftCode,
        payment_type: input.paymentType
      }
    });
    return paymentMethod;
  }
}
import { Length } from "class-validator";
import { AddressInput } from "./AddressInput";

export class PaymentMethodInput {
  @Length(6, 24)
  bankAccountNumber: number;

  @Length(6, 12)
  swiftCode: string;

  @Length(6, 12)
  paymentType: string;
}

export class SellerProgramInput extends PaymentMethodInput {
  userType: string;

  @Length(3, 16)
  firstName: string;

  @Length(3, 16)
  lastName: string;

  @Length(8, 12)
  phoneNumber: string;

  address: AddressInput;
}

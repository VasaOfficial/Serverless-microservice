import { IsEmail, Length, IsString, IsNotEmpty } from 'class-validator'

export class SignupInput {
  @IsEmail()
  email: string

  @IsString()
  @Length(6, 32)
  firebaseUid: string
}

export class PasswordResetInput {
  @IsEmail()
  email: string
}

export class TokenVerificationInput {
  @IsString()
  @IsNotEmpty()
  authorization!: string
}

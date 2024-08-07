import { IsEmail, Length, IsString } from 'class-validator'

export class SignupInput {
  @IsEmail()
  email: string

  @IsString()
  @Length(6, 32)
  uid: string
}

export class PasswordResetInput {
  @IsEmail()
  email: string
}

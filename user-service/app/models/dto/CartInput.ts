import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

export class AddCartItemInput {
  @IsString()
  @IsNotEmpty()
  firebaseUid!: string

  @IsNumber()
  @IsNotEmpty()
  destinationId!: number

  @IsNumber()
  @IsNotEmpty()
  quantity!: number
}

export class GetCartItemInput {
  @IsString()
  @IsNotEmpty()
  firebaseUid!: string
}

export class UpdateCartItemInput {
  @IsString()
  @IsNotEmpty()
  firebaseUid!: string

  @IsNumber()
  @IsNotEmpty()
  destinationId!: number

  @IsNumber()
  @IsNotEmpty()
  quantity!: number
}

export class RemoveCartItemInput {
  @IsString()
  @IsNotEmpty()
  firebaseUid!: string

  @IsNumber()
  @IsNotEmpty()
  destinationId!: number
}

import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

export class AddFavoritesInput {
  @IsString()
  @IsNotEmpty()
  firebaseUid!: string

  @IsNumber()
  @IsNotEmpty()
  destinationId!: number
}

export class GetFavoritesInput {
  @IsString()
  @IsNotEmpty()
  firebaseUid!: string
}

export class DeleteFavoritesInput {
  @IsString()
  @IsNotEmpty()
  firebaseUid!: string

  @IsNumber()
  @IsNotEmpty()
  destinationId!: number
}

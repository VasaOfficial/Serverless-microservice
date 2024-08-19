import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'

export class GetProductInput {
  @IsString()
  @IsNotEmpty()
  id!: string
}

export class SearchProductsInput {
  @IsOptional()
  @IsString()
  continents?: string

  @IsOptional()
  @IsString()
  date?: string

  @IsOptional()
  @IsNumber()
  price?: number
}

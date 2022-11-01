import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  url_key: string;

  @IsNotEmpty()
  original_price: number;

  @IsNotEmpty()
  custom_price: number;
}

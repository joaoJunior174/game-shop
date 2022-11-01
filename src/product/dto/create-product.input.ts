import { IsNotEmpty } from 'class-validator';
import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  brand: string;

  @Field()
  @IsNotEmpty()
  url_key: string;

  @Field()
  @IsNotEmpty()
  original_price: number;

  @Field()
  @IsNotEmpty()
  custom_price: number;
}

import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuoteInputDto {
  @Field(() => [String])
  products: string[];
  @Field()
  price_total: number;

  @Field()
  discount_amount: number;

  @Field()
  cart_key: string;

  @Field()
  user: string;
}

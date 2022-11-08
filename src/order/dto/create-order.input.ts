import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInputDto {
  @Field()
  order_key: string;
  @Field()
  cart_key: string;
  @Field()
  total_value: number;

  @Field()
  payment_method: string;

  @Field()
  status: string;

  @Field()
  user: string;
}

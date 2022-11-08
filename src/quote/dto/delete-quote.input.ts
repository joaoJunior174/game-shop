import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeleteQuoteInputDto {
  @Field()
  cart_key: string;
}

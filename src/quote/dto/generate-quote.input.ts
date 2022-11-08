import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GenerateQuoteInputDto {
  @Field()
  cart_key: string;
}

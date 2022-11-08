import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type QuoteDocument = Quote & Document;

@ObjectType()
@Schema()
export class Quote {
  @Field(() => [String])
  @Prop()
  products: string[];
  @Field()
  @Prop()
  price_total: number;

  @Field()
  @Prop()
  discount_amount: number;

  @Field()
  @Prop()
  cart_key: string;

  @Field()
  @Prop()
  user: string;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);

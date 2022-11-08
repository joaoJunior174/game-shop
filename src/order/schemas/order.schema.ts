import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type OrderDocument = Order & Document;

@ObjectType()
@Schema()
export class Order {
  @Field()
  @Prop()
  order_key: string;
  @Field()
  @Prop()
  cart_key: string;
  @Field()
  @Prop()
  total_value: number;

  @Field()
  @Prop()
  payment_method: string;

  @Field()
  @Prop()
  status: string;

  @Field()
  @Prop()
  user: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

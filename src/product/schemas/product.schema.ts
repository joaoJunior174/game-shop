import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type ProductDocument = Product & Document;

@ObjectType()
@Schema()
export class Product {
  @Field()
  @Prop()
  name: string;
  @Field()
  @Prop()
  brand: string;

  @Field()
  @Prop()
  url_key: string;

  @Field()
  @Prop()
  original_price: number;

  @Field()
  @Prop()
  custom_price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

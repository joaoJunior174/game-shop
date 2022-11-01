import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Product } from 'src/product/schemas/product.schema';
import { Type } from 'class-transformer';

export type CategoryDocument = Category & Document;

@ObjectType()
@Schema()
export class Category {
  @Field()
  @Prop()
  name: string;
  @Field()
  @Prop()
  description: string;

  @Field()
  @Prop()
  url_key: string;

  @Field()
  @Prop()
  parent_id: string;

  @Field(() => [Product], { nullable: true })
  @Prop()
  @Type(() => Product)
  products: Product[];

  @Field(() => [String], { nullable: true })
  @Prop()
  children_url?: string[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);

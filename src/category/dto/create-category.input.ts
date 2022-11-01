import { Product } from 'src/product/schemas/product.schema';
import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { Category } from '../schemas/category.schema';
import { CreateProductInput } from 'src/product/dto/create-product.input';

@InputType()
export class CreateCategoryInputDto {
  @Field()
  name: string;
  @Field()
  description: string;

  @Field()
  url_key: string;

  @Field()
  parent_id: string;

  @Field(() => [CreateProductInput])
  products?: CreateProductInput[];

  @Field(() => [String], { nullable: true })
  children_url?: string[];
}

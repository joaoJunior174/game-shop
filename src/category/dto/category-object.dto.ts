import { CreateProductInput } from 'src/product/dto/create-product.input';

export class CategoryObjectDto {
  name: string;

  description: string;

  url_key: string;

  parent_id: string;

  products?: CreateProductInput[];

  children_url?: string[];
}

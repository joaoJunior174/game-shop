import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(@Inject(ProductService) public productService: ProductService) {}

  @Query(() => Product)
  async product(@Args('name') name: string): Promise<Product> {
    return await this.productService.findOneByName(name);
  }

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Mutation(() => Product)
  async createProductGraphQL(
    @Args('data') data: CreateProductInput,
  ): Promise<Product> {
    return await this.productService.createProductGraphQL(data);
  }
}

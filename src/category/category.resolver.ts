import { CategoryService } from './category.service';
import { Category } from './schemas/category.schema';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateCategoryInputDto } from './dto/create-category.input';
import { DeleteCategoryInputDto } from './dto/delete-category.input';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    @Inject(CategoryService) private categoryService: CategoryService,
  ) {}

  @Query(() => Category)
  async cateogry(@Args('url_key') url_key: string): Promise<Category> {
    return await this.categoryService.findOneByUrlKey(url_key);
  }

  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  @Mutation(() => Category)
  async createCategoryGraphQL(
    @Args('data') data: CreateCategoryInputDto,
  ): Promise<Category> {
    return await this.categoryService.createCategoryGraphQL(data);
  }

  @Mutation(() => Category)
  async updateByUrlKey(
    @Args('data') data: CreateCategoryInputDto,
  ): Promise<Category> {
    return await this.categoryService.updateByUrlKey(data);
  }

  @Mutation(() => Category)
  async deleteCategoryByUrlKey(
    @Args('data') data: DeleteCategoryInputDto,
  ): Promise<Category> {
    return await this.categoryService.deleteByUrlKey(data);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/product/schemas/product.schema';
import { CategoryObjectDto } from './dto/category-object.dto';
import { CreateCategoryInputDto } from './dto/create-category.input';
import { DeleteCategoryInputDto } from './dto/delete-category.input';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async createCategoryGraphQL(
    createCategoryInputDto: CreateCategoryInputDto,
  ): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategoryInputDto);
    return await createdCategory.save();
  }

  async findOneByUrlKey(url_key: string): Promise<Category> {
    const categories = await this.categoryModel.findOne({ url_key: url_key });
    return categories;
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryModel.find();
    return categories;
  }

  async updateByUrlKey(
    createCategoryInputDto: CreateCategoryInputDto,
  ): Promise<Category> {
    return await this.categoryModel
      .findOneAndUpdate(
        { url_key: createCategoryInputDto.url_key },
        createCategoryInputDto,
      )
      .exec();
  }

  async deleteByUrlKey(
    deleteCategoryInputDto: DeleteCategoryInputDto,
  ): Promise<any> {
    return await this.categoryModel.deleteOne({
      url_key: deleteCategoryInputDto.url_key,
    });
  }
}

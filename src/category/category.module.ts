import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { Category, CategorySchema } from './schemas/category.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from 'src/product/product.module';
import { ProductResolver } from 'src/product/product.resolver';
import { ProductService } from 'src/product/product.service';
import { Product, ProductSchema } from 'src/product/schemas/product.schema';

@Module({
  providers: [CategoryService, CategoryResolver],
  imports: [
    ProductModule,
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
})
export class CategoryModule {}

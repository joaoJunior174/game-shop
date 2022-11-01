import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductResolver } from './product.resolver';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductResolver],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    UserModule,
  ],
  exports: [ProductResolver, ProductService],
})
export class ProductModule {}

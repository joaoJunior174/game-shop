import { Body, Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { Role } from './../user/user.enum';
import { Roles } from './../user/roles.decorator';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @Roles(Role.ADMIN)
  createProduct(@Body() productDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(productDto);
  }

  @Get(':name')
  @Roles(Role.ADMIN)
  findOne(@Param('name') params): Promise<Product> {
    return this.productService.findOneByName(params);
  }
}

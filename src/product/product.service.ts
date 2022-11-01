import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateProductInput } from './dto/create-product.input';
import { SearchKeyDto } from './dto/search-key.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) public productModel: Model<ProductDocument>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const createdUser = new this.productModel(createProductDto);
    return await createdUser.save();
  }

  async createProductGraphQL(
    createProductInput: CreateProductInput,
  ): Promise<Product> {
    const createdProduct = new this.productModel(createProductInput);
    return await createdProduct.save();
  }

  async findOneByName(name: string): Promise<Product> {
    const products = await this.productModel.findOne({ name: name });
    return products;
  }

  async findOne(id: string): Promise<Product> {
    const products = await this.productModel.findOne({ id: id });
    return products;
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }
}

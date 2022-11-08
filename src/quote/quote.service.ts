import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuoteInputDto } from './dto/create-quote.input';
import { Quote } from './schemas/quote.schema';
import { QuoteDocument } from './schemas/quote.schema';

@Injectable()
export class QuoteService {
  constructor(
    @InjectModel(Quote.name) private quoteModel: Model<QuoteDocument>,
  ) {}

  async findOneByCartKey(cart_key: string): Promise<Quote> {
    return await this.quoteModel.findOne({ cart_key: cart_key });
  }

  async updateByCartKey(
    createQuoteInputDto: CreateQuoteInputDto,
  ): Promise<Quote> {
    return await this.quoteModel
      .findOneAndUpdate(
        { cart_key: createQuoteInputDto.cart_key },
        createQuoteInputDto,
      )
      .exec();
  }

  async createQuote(createQuoteInputDto: CreateQuoteInputDto): Promise<Quote> {
    const createdQuote = new this.quoteModel(createQuoteInputDto);
    return await createdQuote.save();
  }
}

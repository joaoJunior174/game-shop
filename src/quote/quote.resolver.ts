import { QuoteService } from './quote.service';
import { Quote } from './schemas/quote.schema';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { CreateQuoteInputDto } from './dto/create-quote.input';
import { DeleteQuoteInputDto } from './dto/delete-quote.input';

@Resolver(() => Quote)
export class QuoteResolver {
  constructor(@Inject(QuoteService) private quoteService: QuoteService) {}
  Crypto = require('crypto');
  @Query(() => Quote)
  async quote(@Args('cart_key') cart_key: string): Promise<Quote> {
    return await this.quoteService.findOneByCartKey(cart_key);
  }

  @Query(() => String)
  async generateQuote(@Args('key') date_time: string): Promise<string> {
    return this.Crypto.createHash('sha1')
      .update(date_time)
      .digest('hex')
      .slice(0, 32);
  }

  @Mutation(() => Quote)
  async updateByUrlKey(
    @Args('data') data: CreateQuoteInputDto,
  ): Promise<Quote> {
    return await this.quoteService.updateByCartKey(data);
  }

  @Mutation(() => Quote)
  async createQuote(@Args('data') data: CreateQuoteInputDto): Promise<Quote> {
    const quote: any = await this.quoteService.createQuote(data);
    return quote;
  }
}

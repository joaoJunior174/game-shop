import { Module } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { QuoteResolver } from './quote.resolver';
import { Quote } from './schemas/quote.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { QuoteSchema } from './schemas/quote.schema';

@Module({
  providers: [QuoteService, QuoteResolver],
  imports: [
    MongooseModule.forFeature([{ name: Quote.name, schema: QuoteSchema }]),
  ],
})
export class QuoteModule {}

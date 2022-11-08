import { Module, CacheModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './user/roles.guard';
import { ProductModule } from './product/product.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CategoryModule } from './category/category.module';
import { QuoteModule } from './quote/quote.module';
import { Quote } from './quote';
import { OrderModule } from './order/order.module';
import { Order } from './order';
@Module({
  imports: [
    CacheModule.register(),
    UserModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    AuthModule,
    ProductModule,
    CategoryModule,
    QuoteModule,
    OrderModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    Quote,
    Order,
  ],
})
export class AppModule {}

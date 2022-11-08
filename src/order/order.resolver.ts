import { Inject } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Order } from './schemas/order.schema';
import { OrderService } from './order.service';
import { CreateOrderInputDto } from './dto/create-order.input';

@Resolver()
export class OrderResolver {
  constructor(@Inject(OrderService) private orderService: OrderService) {}

  @Query(() => Order)
  async order(@Args('order_key') order_key: string): Promise<Order> {
    return this.orderService.findOrderByKey(order_key);
  }

  @Mutation(() => Order)
  async createOrder(@Args('data') data: CreateOrderInputDto): Promise<Order> {
    return await this.orderService.createOrder(data);
  }
}

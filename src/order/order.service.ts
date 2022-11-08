import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderInputDto } from './dto/create-order.input';
import { Order, OrderDocument } from './schemas/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async findOrderByKey(order_key: string): Promise<Order> {
    return await this.orderModel.findOne({ order_key: order_key });
  }

  async createOrder(createOrderInputDto: CreateOrderInputDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderInputDto);
    return await createdOrder.save();
  }
}

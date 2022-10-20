import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createTask(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const existUser: CreateUserDto = await this.userModel.findOne({
      username,
      hashedPassword,
    });

    if (existUser) {
      throw new BadRequestException(`There are accounts with the same data`);
    }
    createUserDto.password = hashedPassword;
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findUser(username: string): Promise<User> {
    return this.userModel.findOne({
      username,
    });
  }
}

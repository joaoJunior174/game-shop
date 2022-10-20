import { Body, Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { IUser } from './user.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createTask(@Body() createUserDto: CreateUserDto) {
    return this.userService.createTask(createUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get('/:username')
  findUser(@Param('username') username: string): Promise<IUser> {
    return this.userService.findUser(username);
  }
}

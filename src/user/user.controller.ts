import { Body, Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { IUser } from './user.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Role } from './user.enum';
import { Roles } from './roles.decorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createTask(createUserDto);
  }

  @Post('/admin')
  createUserAdmin(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUserAdmin(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:username')
  findUser(@Param('username') username: string): Promise<IUser> {
    return this.userService.findUser(username);
  }

  @Get('/test/log')
  @Roles(Role.USER)
  findTest(): boolean {
    return true;
  }
}

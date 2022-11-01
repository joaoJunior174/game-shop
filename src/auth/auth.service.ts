import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private jwtTokenService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findUser(username);

    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    const passwordValid = await bcrypt.compare(password, user.password);

    if (user && passwordValid) {
      return user;
    }

    return null;
  }

  async loginWithCredentials(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
      rule: user.roles,
    };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}

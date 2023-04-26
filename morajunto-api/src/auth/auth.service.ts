import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User, UsersService } from '~/users';
import { InvalidEmailOrPasswordException } from './exceptions/invalid-email-or-password.exception';
import { UserResponse } from './models/user.response';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  create(user: User) {
    const userPayload: UserResponse = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };
    return {
      access_token: this.jwtService.sign(userPayload),
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new InvalidEmailOrPasswordException();

    return user;
  }
}

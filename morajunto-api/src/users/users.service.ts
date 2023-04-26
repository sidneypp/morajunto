import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from '~/database';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DuplicatedEmailException } from './exceptions/duplicated-email.exception';
import { UserNotFoundException } from './exceptions/user-not-found.exception';

@Injectable()
export class UsersService {
  private readonly select = {
    id: true,
    email: true,
    name: true,
    photo: true,
    gender: true,
    phoneNumber: true,
    birthDate: true,
    document: true,
    createdAt: true,
  };

  constructor(private readonly databaseService: DatabaseService) {}

  async create({ password, ...user }: CreateUserDto) {
    const existUser = await this.findByEmail(user.email);
    if (existUser) throw new DuplicatedEmailException();

    return this.databaseService.user.create({
      select: { id: true, email: true, name: true },
      data: {
        ...user,
        password: await bcrypt.hash(password, 10),
      },
    });
  }

  async update(user: User, data: UpdateUserDto) {
    return this.databaseService.user.update({
      select: this.select,
      data,
      where: {
        id: user.id,
      },
    });
  }

  findOrThrow(id: number) {
    const user = this.databaseService.user.findUnique({
      select: this.select,
      where: { id },
    });

    if (!user) throw new UserNotFoundException();

    return user;
  }

  findByEmail(email: string) {
    return this.databaseService.user.findUnique({
      where: { email },
    });
  }
}

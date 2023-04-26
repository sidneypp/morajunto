import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { IsPublic } from '~/auth/decorators/is-public.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @IsPublic()
  @Post('users')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('user')
  show(@CurrentUser() user: User) {
    return this.userService.findOrThrow(user.id);
  }

  @Put('user')
  update(@CurrentUser() user: User, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(user, updateUserDto);
  }
}

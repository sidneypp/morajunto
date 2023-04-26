import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { LocalAuthGuard } from './guards/local.guard';
import { AuthRequest } from './models/auth.request';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @IsPublic()
  @UseGuards(LocalAuthGuard)
  create(@Request() request: AuthRequest) {
    return this.authService.create(request.user);
  }
}

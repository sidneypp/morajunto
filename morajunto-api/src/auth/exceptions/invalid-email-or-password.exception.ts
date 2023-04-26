import { UnauthorizedException } from '@nestjs/common';

export class InvalidEmailOrPasswordException extends UnauthorizedException {
  constructor() {
    super('O endereço de e-mail ou a senha fornecidos estão incorretos.');
  }
}

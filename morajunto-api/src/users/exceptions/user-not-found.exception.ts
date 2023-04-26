import { BadRequestException } from '@nestjs/common';

export class UserNotFoundException extends BadRequestException {
  constructor() {
    super('Usuário não encontrado');
  }
}

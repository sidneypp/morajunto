import { BadRequestException } from '@nestjs/common';

export class DuplicatedEmailException extends BadRequestException {
  constructor() {
    super('E-mail já registrado');
  }
}

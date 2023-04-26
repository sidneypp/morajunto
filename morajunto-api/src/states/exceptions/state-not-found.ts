import { BadRequestException } from '@nestjs/common';

export class StateNotFound extends BadRequestException {
  constructor() {
    super('Estado não encontrado');
  }
}

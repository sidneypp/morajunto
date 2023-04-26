import { BadRequestException } from '@nestjs/common';

export class PropertyNotFound extends BadRequestException {
  constructor() {
    super('Propriedade não encontrada');
  }
}

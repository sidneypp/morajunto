import { BadRequestException } from '@nestjs/common';

export class NeighborhoodNotFound extends BadRequestException {
  constructor() {
    super('Bairro não encontrado');
  }
}

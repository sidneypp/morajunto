import { BadRequestException } from '@nestjs/common';

export class CityNotFound extends BadRequestException {
  constructor() {
    super('Cidade não encontrada');
  }
}

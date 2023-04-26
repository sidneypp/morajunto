import { BadRequestException } from '@nestjs/common';

export class PropertyImageNotFound extends BadRequestException {
  constructor() {
    super('Image não encontrada');
  }
}

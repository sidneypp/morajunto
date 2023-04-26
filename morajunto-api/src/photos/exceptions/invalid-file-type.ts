import { BadRequestException } from '@nestjs/common';

export class InvalidFileType extends BadRequestException {
  constructor() {
    super('Tipo de arquivo inválido');
  }
}

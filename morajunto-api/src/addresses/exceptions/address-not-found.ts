import { BadRequestException } from '@nestjs/common';

export class AddressNotFound extends BadRequestException {
  constructor() {
    super('Endereço não encontrado');
  }
}

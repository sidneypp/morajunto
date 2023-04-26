import { BadRequestException } from '@nestjs/common';

export class OfferNotFound extends BadRequestException {
  constructor() {
    super('Anúncio não encontrado');
  }
}

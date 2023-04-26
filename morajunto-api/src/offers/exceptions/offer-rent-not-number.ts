import { BadRequestException } from '@nestjs/common';

export class OfferRentNotNumber extends BadRequestException {
  constructor() {
    super('O valor do aluguel está incorreto');
  }
}

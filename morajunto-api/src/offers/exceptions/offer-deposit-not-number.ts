import { BadRequestException } from '@nestjs/common';

export class OfferDepositNotNumber extends BadRequestException {
  constructor() {
    super('O valor do caução está incorreto');
  }
}

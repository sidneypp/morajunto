import { Controller, Get, Param } from '@nestjs/common';
import { IsPublic } from '~/auth/decorators/is-public.decorator';
import { AddressesService } from './addresses.service';
import { FindAddressDto } from './dto/find-adress.dto';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @IsPublic()
  @Get(':zipcode/zipcodes')
  find(@Param() { zipcode }: FindAddressDto) {
    return this.addressesService.findByZipCode(zipcode);
  }
}

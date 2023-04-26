import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { IsPublic } from '~/auth/decorators/is-public.decorator';
import { User } from '~/users/entities/user.entity';
import { CreateOfferDto } from './dto/create-offer.dto';
import { OfferNotFound } from './exceptions/offer-not-found';
import { OffersService } from './offers.service';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @IsPublic()
  @Get()
  getAllWithFilters(
    @Query('cityId') cityId: number,
    @Query('neighborhoodId') neighborhoodId?: number,
  ) {
    if (!cityId) throw new OfferNotFound();

    return this.offersService.getAllWithFilters(cityId, neighborhoodId);
  }

  @Post(':propertyId')
  createOrUpdate(
    @CurrentUser() user: User,
    @Param('propertyId') propertyId: number,
    @Body() createOfferDto: CreateOfferDto,
  ) {
    return this.offersService.createOrUpdate(user, propertyId, createOfferDto);
  }
}

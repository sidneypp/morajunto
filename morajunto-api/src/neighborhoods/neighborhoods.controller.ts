import { Controller, Get, Param } from '@nestjs/common';
import { IsPublic } from '~/auth/decorators/is-public.decorator';
import { NeighborhoodsService } from './neighborhoods.service';

@Controller()
export class NeighborhoodsController {
  constructor(private readonly neighborhoodsService: NeighborhoodsService) {}

  @IsPublic()
  @Get('neighborhoods')
  getAll() {
    return this.neighborhoodsService.getAll();
  }

  @IsPublic()
  @Get('cities/:cityId/neighborhoods')
  getByCity(@Param('cityId') cityId: number) {
    return this.neighborhoodsService.getByCity(cityId);
  }

  @IsPublic()
  @Get('cities/:cityId/neighborhoods/:normalizedName')
  findByNormalizedName(
    @Param('cityId') cityId: number,
    @Param('normalizedName') normalizedName: string,
  ) {
    return this.neighborhoodsService.findByNormalizedName(
      cityId,
      normalizedName,
    );
  }
}

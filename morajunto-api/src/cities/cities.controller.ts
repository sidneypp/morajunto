import { Controller, Get, Param } from '@nestjs/common';
import { IsPublic } from '~/auth/decorators/is-public.decorator';
import { CitiesService } from './cities.service';

@Controller()
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @IsPublic()
  @Get('cities')
  getAll() {
    return this.citiesService.getAll();
  }

  @IsPublic()
  @Get('cities/:normalizedName')
  findByNormalizedName(@Param('normalizedName') normalizedName: string) {
    return this.citiesService.findByNormalizedName(normalizedName);
  }

  @IsPublic()
  @Get('states/:stateAcronym/cities')
  getByState(@Param('stateAcronym') stateAcronym: string) {
    return this.citiesService.getByState(stateAcronym);
  }
}

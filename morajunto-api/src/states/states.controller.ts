import { Controller, Get, Query } from '@nestjs/common';
import { IsPublic } from '~/auth/decorators/is-public.decorator';
import { State } from './entities/state.entity';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @IsPublic()
  @Get()
  getAll(@Query('orderBy') orderBy: keyof State = 'name') {
    return this.statesService.getAll(orderBy);
  }
}

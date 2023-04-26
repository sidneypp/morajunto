import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { User } from '~/users/entities/user.entity';
import { CreatePropertyDto } from './dto/create-property.dto';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  getAll(@CurrentUser() user: User) {
    return this.propertiesService.getAll(user);
  }

  @Get(':id')
  find(@CurrentUser() user: User, @Param('id') id: number) {
    return this.propertiesService.findOrThrow(id);
  }

  @Post()
  createOrUpdate(
    @CurrentUser() user: User,
    @Body() createPropertyDto: CreatePropertyDto,
  ) {
    return this.propertiesService.createOrUpdate(user, createPropertyDto);
  }
}

import { Body, Controller, Param, Post } from '@nestjs/common';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { User } from '~/users';
import { CreatePropertyFeatureDto } from './dto/create-property-feature.dto';
import { PropertiesFeaturesService } from './properties-features.service';

@Controller('properties/:propertyId/features')
export class PropertiesFeaturesController {
  constructor(
    private readonly propertiesFeaturesService: PropertiesFeaturesService,
  ) {}

  @Post()
  createOrUpdate(
    @CurrentUser() user: User,
    @Param('propertyId') propertyId: number,
    @Body() createPropertyFeature: CreatePropertyFeatureDto,
  ) {
    return this.propertiesFeaturesService.createOrUpdate(
      user,
      propertyId,
      createPropertyFeature,
    );
  }
}

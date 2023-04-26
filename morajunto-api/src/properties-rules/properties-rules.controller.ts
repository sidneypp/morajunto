import { Body, Controller, Param, Post } from '@nestjs/common';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { User } from '~/users';
import { CreatePropertyRuleDto } from './dto/create-property-rule.dto';
import { PropertiesRulesService } from './properties-rules.service';

@Controller('properties/:propertyId/rules')
export class PropertiesRulesController {
  constructor(
    private readonly propertiesRulesService: PropertiesRulesService,
  ) {}

  @Post()
  createOrUpdate(
    @CurrentUser() user: User,
    @Param('propertyId') propertyId: number,
    @Body() createPropertyRule: CreatePropertyRuleDto,
  ) {
    return this.propertiesRulesService.createOrUpdate(
      user,
      propertyId,
      createPropertyRule,
    );
  }
}

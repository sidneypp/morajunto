import { Controller, Param, Post } from '@nestjs/common';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { User } from '~/users';
import { BedroomsService } from './bedrooms.service';

@Controller()
export class BedroomsController {
  constructor(private readonly bedroomsService: BedroomsService) {}

  @Post('/properties/:propertyId/bedrooms')
  create(@CurrentUser() user: User, @Param('propertyId') propertyId: number) {
    return this.bedroomsService.create(user, propertyId);
  }
}

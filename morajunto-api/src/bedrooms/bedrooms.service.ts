import { Injectable } from '@nestjs/common';
import { DatabaseService } from '~/database';
import { PropertiesService } from '~/properties';
import { PropertyNotFound } from '~/properties/exceptions/property-not-found';
import { User } from '~/users';

@Injectable()
export class BedroomsService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly propertiesService: PropertiesService,
  ) {}

  async create(user: User, propertyId: number) {
    const { id, userId, bedrooms } = await this.propertiesService.findOrThrow(
      propertyId,
    );

    if (userId !== user.id) throw new PropertyNotFound();

    const bedroomNumber = (bedrooms?.length ?? 0) + 1;

    return this.databaseService.bedroom.create({
      data: {
        key: `Quarto ${bedroomNumber}`,
        propertyId: id,
      },
    });
  }
}

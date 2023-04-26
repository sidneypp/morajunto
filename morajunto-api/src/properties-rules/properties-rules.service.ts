import { Injectable } from '@nestjs/common';
import { DatabaseService } from '~/database';
import { PropertyNotFound } from '~/properties/exceptions/property-not-found';
import { PropertiesService } from '~/properties/properties.service';
import { User } from '~/users';
import { PropertyRule } from './entities/property-rule.entity';

@Injectable()
export class PropertiesRulesService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly propertiesService: PropertiesService,
  ) {}

  async createOrUpdate(
    user: User,
    propertyId: number,
    propertyRule: PropertyRule,
  ) {
    const { id, userId } = await this.propertiesService.findOrThrow(propertyId);

    if (userId !== user.id) throw new PropertyNotFound();

    const {
      smokingAllowed,
      childrenAllowed,
      petsAllowed,
      alcoholAllowed,
      guestsAllowed,
    } = propertyRule;

    const data = {
      smokingAllowed,
      childrenAllowed,
      petsAllowed,
      alcoholAllowed,
      guestsAllowed,
    };

    const rule = await this.databaseService.propertyRules.findFirst({
      where: {
        propertyId: id,
      },
    });

    if (rule) {
      return this.databaseService.propertyRules.update({
        data,
        where: {
          propertyId: id,
        },
      });
    }

    return this.databaseService.propertyRules.create({
      data: {
        ...data,
        property: {
          connect: {
            id: id,
          },
        },
      },
    });
  }
}

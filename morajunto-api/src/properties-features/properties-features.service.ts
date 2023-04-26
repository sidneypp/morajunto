import { Injectable } from '@nestjs/common';
import { DatabaseService } from '~/database';
import { PropertyNotFound } from '~/properties/exceptions/property-not-found';
import { PropertiesService } from '~/properties/properties.service';
import { User } from '~/users';
import { PropertyFeature } from './entities/property-feature.entity';

@Injectable()
export class PropertiesFeaturesService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly propertiesService: PropertiesService,
  ) {}

  async createOrUpdate(
    user: User,
    propertyId: number,
    propertyFeature: PropertyFeature,
  ) {
    const { id, userId } = await this.propertiesService.findOrThrow(propertyId);

    if (userId !== user.id) throw new PropertyNotFound();

    const {
      isUnfurnished,
      hasParking,
      hasGym,
      hasPool,
      hasAccessibility,
      hasAirConditioning,
      hasTv,
      hasCentralHeating,
      hasElevator,
      hasOutdoorArea,
      hasBalcony,
      hasWifi,
      isUnfurnishedBedroom,
      hasEnsuite,
      hasCleaningService,
    } = propertyFeature;

    const data = {
      isUnfurnished,
      hasParking,
      hasGym,
      hasPool,
      hasAccessibility,
      hasAirConditioning,
      hasTv,
      hasCentralHeating,
      hasElevator,
      hasOutdoorArea,
      hasBalcony,
      hasWifi,
      isUnfurnishedBedroom,
      hasEnsuite,
      hasCleaningService,
    };

    const feature = await this.databaseService.propertyFeatures.findFirst({
      where: {
        propertyId: id,
      },
    });

    if (feature) {
      return this.databaseService.propertyFeatures.update({
        data,
        where: {
          propertyId: id,
        },
      });
    }

    return this.databaseService.propertyFeatures.create({
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

import { Injectable } from '@nestjs/common';
import { DatabaseService } from '~/database';
import { PropertyNotFound } from '~/properties/exceptions/property-not-found';
import { PropertiesService } from '~/properties/properties.service';
import { User } from '~/users';
import { Offer } from './entities/offer.entity';
import { OfferDepositNotNumber } from './exceptions/offer-deposit-not-number';
import { OfferRentNotNumber } from './exceptions/offer-rent-not-number';

@Injectable()
export class OffersService {
  private readonly select = {
    id: true,
    property: {
      include: {
        address: true,
        features: true,
        photos: true,
        rules: true,
      },
    },
    publish: true,
    rentPricing: true,
    availableAt: true,
    depositRequired: true,
    depositAmount: true,
    menAllowed: true,
    womenAllowed: true,
    withElectricity: true,
    withGas: true,
    withInternet: true,
    withWater: true,
  };

  constructor(
    private readonly databaseService: DatabaseService,
    private readonly propertiesService: PropertiesService,
  ) {}

  async getAllWithFilters(cityId: number, neighborhoodId: number) {
    console.log('teste neighborhoodId', neighborhoodId);
    return this.databaseService.offer.findMany({
      select: this.select,
      where: {
        publish: false,
        property: {
          address: {
            cityId,
            neighborhoodId: Boolean(neighborhoodId)
              ? neighborhoodId
              : undefined,
          },
        },
      },
      orderBy: [
        {
          createdAt: 'asc',
        },
      ],
    });
  }

  async createOrUpdate(user: User, propertyId: number, offerDto: Offer) {
    const { id, userId } = await this.propertiesService.findOrThrow(propertyId);

    if (userId !== user.id) throw new PropertyNotFound();

    const {
      withElectricity,
      withGas,
      withInternet,
      withWater,
      depositRequired,
      rentPricing,
      depositAmount,
      minimumStay,
      ageGroup,
      toStudy,
      toWork,
      menAllowed,
      womenAllowed,
    } = offerDto;

    if (depositRequired) {
      let depositAmountValid = depositAmount.replace(',', '');
      depositAmountValid = depositAmountValid.replace('.', '');
      const depositValidation = /^\d+$/.test(depositAmountValid);
      if (!depositValidation) {
        throw new OfferDepositNotNumber();
      }
    }
    let rentValid = rentPricing.replace(',', '');
    rentValid = rentValid.replace('.', '');
    const rentValidation = /^\d+$/.test(rentValid);
    if (!rentValidation) {
      throw new OfferRentNotNumber();
    }

    const data = {
      withElectricity,
      withGas,
      withInternet,
      withWater,
      depositRequired,
      rentPricing,
      depositAmount,
      minimumStay,
      ageGroup,
      toStudy,
      toWork,
      menAllowed,
      womenAllowed,
      availableAt: new Date(),
    };

    if (offerDto.id) {
      const offer = await this.databaseService.offer.findFirst({
        where: {
          id: offerDto.id,
        },
      });

      if (offer) {
        return this.databaseService.offer.update({
          data,
          where: {
            id: offerDto.id,
          },
        });
      }
    }
    return this.databaseService.offer.create({
      data: {
        ...data,
        property: {
          connect: {
            id: id,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
}

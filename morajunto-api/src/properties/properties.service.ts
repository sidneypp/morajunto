import { Injectable } from '@nestjs/common';
import { AddressesService } from '~/addresses/addresses.service';
import { AddressNotFound } from '~/addresses/exceptions/address-not-found';
import { CitiesService } from '~/cities/cities.service';
import { CityNotFound } from '~/cities/exceptions/city-not-found';
import { DatabaseService } from '~/database/database.service';
import { NeighborhoodsService } from '~/neighborhoods';
import { NeighborhoodNotFound } from '~/neighborhoods/exceptions/neighborhood-not-found';
import { StatesService } from '~/states/states.service';
import { User } from '~/users/entities/user.entity';
import { Property } from './entities/property.entity';
import { PropertyNotFound } from './exceptions/property-not-found';

@Injectable()
export class PropertiesService {
  private readonly select = {
    address: { include: { state: true, city: true, neighborhood: true } },
    photos: true,
    features: true,
    bedrooms: true,
    rules: true,
  };

  constructor(
    private readonly databaseService: DatabaseService,
    private readonly statesService: StatesService,
    private readonly citiesService: CitiesService,
    private readonly neighborhoodsService: NeighborhoodsService,
    private readonly addressesService: AddressesService,
  ) {}

  getAll(user: User) {
    return this.databaseService.property.findMany({
      include: this.select,
      where: {
        userId: user.id,
      },
    });
  }

  async findOrThrow(id: number) {
    const property = await this.databaseService.property.findFirst({
      include: this.select,
      where: { id },
    });

    if (!property) throw new PropertyNotFound();

    return property;
  }

  async createOrUpdate(user: User, { id, address, ...property }: Property) {
    const state = await this.statesService.findOrThrow(address.stateId);

    const city = await this.citiesService.findOrThrow(address.cityId);
    if (city.stateAcronym !== state.acronym) throw new CityNotFound();

    const neighborhood = await this.neighborhoodsService.findOrThrow(
      address.neighborhoodId,
    );
    if (neighborhood.cityId !== city.id) throw new NeighborhoodNotFound();

    const data = {
      kind: property.kind,
      area: property.area,
      user: {
        connect: {
          id: user.id,
        },
      },
      address: {
        create: {
          zipcode: address.zipcode,
          stateId: state.id,
          cityId: city.id,
          neighborhoodId: neighborhood.id,
          street: address.street,
          number: address.number,
          complement: address.complement,
        },
      },
    };

    if (id) {
      const foundProperty = await this.findOrThrow(id);
      if (foundProperty.userId !== user.id) throw new PropertyNotFound();

      const foundAddress = await this.addressesService.findOrThrow(address.id);
      if (foundAddress.id !== foundProperty.addressId)
        throw new AddressNotFound();

      return this.databaseService.property.update({
        include: this.select,
        data: {
          ...data,
          address: {
            update: {
              id: address.id,
              ...data.address.create,
            },
          },
        },
        where: { id },
      });
    }

    return this.databaseService.property.create({
      include: this.select,
      data,
    });
  }
}

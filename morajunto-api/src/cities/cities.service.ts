import { Injectable } from '@nestjs/common';
import { DatabaseService } from '~/database';
import { CityNotFound } from './exceptions/city-not-found';

@Injectable()
export class CitiesService {
  constructor(private readonly databaseService: DatabaseService) {}

  getAll() {
    return this.databaseService.city.findMany({
      orderBy: [
        {
          state: {
            name: 'asc',
          },
        },
        {
          name: 'asc',
        },
      ],
    });
  }

  async findByNormalizedName(normalizedName: string) {
    const city = await this.databaseService.city.findFirst({
      where: {
        normalizedName,
      },
    });

    if (!city) throw new CityNotFound();

    return city;
  }

  getByState(stateAcronym: string) {
    return this.databaseService.city.findMany({
      where: { stateAcronym },
    });
  }

  findByNameInState(name: string, stateId: number) {
    return this.databaseService.city.findFirst({
      where: {
        state: {
          id: stateId,
        },
        name,
      },
    });
  }

  async findOrThrow(id: number) {
    const city = await this.databaseService.city.findUnique({
      where: {
        id,
      },
    });

    if (!city) throw new CityNotFound();

    return city;
  }
}

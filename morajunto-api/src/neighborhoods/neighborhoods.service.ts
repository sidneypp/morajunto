import { Injectable } from '@nestjs/common';
import { DatabaseService } from '~/database';
import { NeighborhoodNotFound } from './exceptions/neighborhood-not-found';

@Injectable()
export class NeighborhoodsService {
  constructor(private readonly databaseService: DatabaseService) {}

  getAll() {
    return this.databaseService.neighborhood.findMany({
      include: {
        city: true,
      },
      orderBy: [
        {
          cityId: 'asc',
        },
        {
          name: 'asc',
        },
      ],
    });
  }

  async findByNormalizedName(cityId: number, normalizedName: string) {
    const neighborhood = await this.databaseService.neighborhood.findFirst({
      where: {
        cityId,
        normalizedName,
      },
    });

    if (!neighborhood) throw new NeighborhoodNotFound();

    return neighborhood;
  }

  getByCity(cityId: number) {
    return this.databaseService.neighborhood.findMany({
      where: { cityId },
      orderBy: { name: 'asc' },
    });
  }

  findByNameInCity(name: string, cityId: number) {
    return this.databaseService.neighborhood.findFirst({
      where: {
        name,
        cityId,
      },
    });
  }

  async findOrThrow(id: number) {
    const neighborhood = await this.databaseService.neighborhood.findUnique({
      where: {
        id,
      },
    });

    if (!neighborhood) throw new NeighborhoodNotFound();

    return neighborhood;
  }
}

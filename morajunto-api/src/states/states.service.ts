import { Injectable } from '@nestjs/common';
import { DatabaseService } from '~/database';
import { State } from '~/states';
import { StateNotFound } from './exceptions/state-not-found';

@Injectable()
export class StatesService {
  constructor(private readonly databaseService: DatabaseService) {}

  getAll(orderBy: keyof State) {
    return this.databaseService.state.findMany({
      orderBy: {
        [orderBy]: 'asc',
      },
    });
  }

  findByAcronym(acronym: string) {
    return this.databaseService.state.findUnique({
      where: {
        acronym,
      },
    });
  }

  async findOrThrow(id: number) {
    const state = await this.databaseService.state.findUnique({
      where: { id },
    });

    if (!state) throw new StateNotFound();

    return state;
  }
}

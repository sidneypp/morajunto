import { Injectable } from '@nestjs/common';
import { CitiesService } from '~/cities';
import { DatabaseService } from '~/database';
import { NeighborhoodsService } from '~/neighborhoods';
import { StatesService } from '~/states';
import { ViaCepService } from '~/via-cep/via-cep.service';
import { AddressNotFound } from './exceptions/address-not-found';

@Injectable()
export class AddressesService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly viaCepService: ViaCepService,
    private readonly statesService: StatesService,
    private readonly citiesService: CitiesService,
    private readonly neighborhoodsService: NeighborhoodsService,
  ) {}

  async findOrThrow(id: number) {
    const address = await this.databaseService.address.findFirst({
      where: { id },
    });

    if (!address) throw new AddressNotFound();

    return address;
  }

  async findByZipCode(zipcode: string) {
    const response = await this.viaCepService.searchZipcode(zipcode);

    if (response.erro) {
      return;
    }

    const state = await this.statesService.findByAcronym(response.uf);
    const city = await this.citiesService.findByNameInState(
      response.localidade,
      state?.id,
    );
    const neighborhood = await this.neighborhoodsService.findByNameInCity(
      response.bairro,
      city?.id,
    );

    return {
      zipcode: response.cep,
      state,
      stateId: state?.id ?? null,
      city,
      cityId: city?.id ?? null,
      neighborhood,
      neighborhoodId: neighborhood?.id ?? null,
      street: response.logradouro,
    };
  }
}

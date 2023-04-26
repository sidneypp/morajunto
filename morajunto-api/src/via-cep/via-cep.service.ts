import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ViaCep } from './entities/via-cep.entity';

@Injectable()
export class ViaCepService {
  constructor(private readonly httpService: HttpService) {}

  async searchZipcode(zipcode: string): Promise<ViaCep> {
    const { data } = await firstValueFrom(
      this.httpService.get(`/${zipcode}/json`).pipe(),
    );
    return data;
  }
}

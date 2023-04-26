import { Module } from '@nestjs/common';
import { CitiesModule } from '~/cities';
import { DatabaseModule } from '~/database';
import { NeighborhoodsModule } from '~/neighborhoods';
import { StatesModule } from '~/states';
import { ViaCepModule } from '~/via-cep';
import { AddressesController } from './addresses.controller';
import { AddressesService } from './addresses.service';

@Module({
  imports: [
    DatabaseModule,
    ViaCepModule,
    StatesModule,
    CitiesModule,
    NeighborhoodsModule,
  ],
  controllers: [AddressesController],
  providers: [AddressesService],
  exports: [AddressesService],
})
export class AddressesModule {}

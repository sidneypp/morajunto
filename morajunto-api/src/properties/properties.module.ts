import { Module } from '@nestjs/common';
import { AddressesModule } from '~/addresses';
import { CitiesModule } from '~/cities/cities.module';
import { DatabaseModule } from '~/database/database.module';
import { NeighborhoodsModule } from '~/neighborhoods';
import { StatesModule } from '~/states/states.module';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';

@Module({
  imports: [
    DatabaseModule,
    StatesModule,
    CitiesModule,
    NeighborhoodsModule,
    AddressesModule,
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
  exports: [PropertiesService],
})
export class PropertiesModule {}

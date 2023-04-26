import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AddressesModule } from '~/addresses';
import { AuthModule } from '~/auth';
import { JwtAuthGuard } from '~/auth/guards/jwt-auth.guard';
import { BedroomsModule } from '~/bedrooms';
import { CitiesModule } from '~/cities';
import { DatabaseModule } from '~/database';
import { NeighborhoodsModule } from '~/neighborhoods';
import { PhotosModule } from '~/photos';
import { PropertiesModule } from '~/properties';
import { PropertiesFeaturesModule } from '~/properties-features';
import { PropertiesPhotosModule } from '~/properties-photos';
import { PropertiesRulesModule } from '~/properties-rules';
import { StatesModule } from '~/states';
import { UsersModule } from '~/users';
import { ViaCepModule } from '~/via-cep';
import { OffersModule } from './offers';
@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    StatesModule,
    CitiesModule,
    NeighborhoodsModule,
    AddressesModule,
    PropertiesModule,
    PropertiesPhotosModule,
    PropertiesFeaturesModule,
    PropertiesRulesModule,
    BedroomsModule,
    ViaCepModule,
    PhotosModule,
    OffersModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}

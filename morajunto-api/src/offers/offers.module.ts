import { Module } from '@nestjs/common';
import { DatabaseModule } from '~/database/database.module';
import { PropertiesModule } from '~/properties';
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';

@Module({
  imports: [DatabaseModule, PropertiesModule],
  controllers: [OffersController],
  providers: [OffersService],
  exports: [OffersService],
})
export class OffersModule {}

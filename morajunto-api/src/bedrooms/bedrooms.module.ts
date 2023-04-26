import { Module } from '@nestjs/common';
import { DatabaseModule } from '~/database';
import { PropertiesModule } from '~/properties';
import { BedroomsController } from './bedrooms.controller';
import { BedroomsService } from './bedrooms.service';

@Module({
  imports: [DatabaseModule, PropertiesModule],
  providers: [BedroomsService],
  controllers: [BedroomsController],
})
export class BedroomsModule {}

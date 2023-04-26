import { Module } from '@nestjs/common';
import { DatabaseModule } from '~/database';
import { NeighborhoodsController } from './neighborhoods.controller';
import { NeighborhoodsService } from './neighborhoods.service';

@Module({
  imports: [DatabaseModule],
  controllers: [NeighborhoodsController],
  providers: [NeighborhoodsService],
  exports: [NeighborhoodsService],
})
export class NeighborhoodsModule {}

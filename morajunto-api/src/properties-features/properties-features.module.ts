import { Module } from '@nestjs/common';
import { DatabaseModule } from '~/database';
import { PropertiesModule } from '~/properties/properties.module';
import { PropertiesFeaturesController } from './properties-features.controller';
import { PropertiesFeaturesService } from './properties-features.service';

@Module({
  imports: [DatabaseModule, PropertiesModule],
  providers: [PropertiesFeaturesService],
  controllers: [PropertiesFeaturesController],
})
export class PropertiesFeaturesModule {}

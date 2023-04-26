import { Module } from '@nestjs/common';
import { DatabaseModule } from '~/database';
import { PropertiesModule } from '~/properties/properties.module';
import { PropertiesRulesController } from './properties-rules.controller';
import { PropertiesRulesService } from './properties-rules.service';

@Module({
  imports: [DatabaseModule, PropertiesModule],
  providers: [PropertiesRulesService],
  controllers: [PropertiesRulesController],
})
export class PropertiesRulesModule {}

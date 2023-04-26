import { IsBoolean } from 'class-validator';
import { PropertyFeature } from '../entities/property-feature.entity';

export class CreatePropertyFeatureDto extends PropertyFeature {
  @IsBoolean()
  isUnfurnished: boolean;

  @IsBoolean()
  hasParking: boolean;

  @IsBoolean()
  hasGym: boolean;

  @IsBoolean()
  hasPool: boolean;

  @IsBoolean()
  hasAccessibility: boolean;

  @IsBoolean()
  hasAirConditioning: boolean;

  @IsBoolean()
  hasTv: boolean;

  @IsBoolean()
  hasCentralHeating: boolean;

  @IsBoolean()
  hasElevator: boolean;

  @IsBoolean()
  hasOutdoorArea: boolean;

  @IsBoolean()
  hasBalcony: boolean;

  @IsBoolean()
  hasWifi: boolean;

  @IsBoolean()
  isUnfurnishedBedroom: boolean;

  @IsBoolean()
  hasEnsuite: boolean;

  @IsBoolean()
  hasCleaningService: boolean;
}

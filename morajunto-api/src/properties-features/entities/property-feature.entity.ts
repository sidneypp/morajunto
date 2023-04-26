import { Property } from '~/properties';

export class PropertyFeature {
  id?: number;
  property?: Property;
  propertyId: number;
  isUnfurnished: boolean;

  hasParking: boolean;
  hasGym: boolean;
  hasPool: boolean;
  hasAccessibility: boolean;
  hasAirConditioning: boolean;
  hasTv: boolean;
  hasCentralHeating: boolean;
  hasElevator: boolean;
  hasOutdoorArea: boolean;
  hasBalcony: boolean;
  hasWifi: boolean;
  isUnfurnishedBedroom: boolean;
  hasEnsuite: boolean;
  hasCleaningService: boolean;
}

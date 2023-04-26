export type CreateFeatureAndRuleDto = {
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
  smokingAllowed?: boolean;
  childrenAllowed?: boolean;
  petsAllowed?: boolean;
  alcoholAllowed?: boolean;
  guestsAllowed?: boolean;
};
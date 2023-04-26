export class Offer {
  id?: number;
  userId?: number;
  propertyId?: number;
  bedroomId?: number;
  publish: boolean;
  rentPricing: string;
  availableAt: Date;
  depositRequired: boolean;
  depositAmount: string;
  minimumStay?: number;
  maximumStay?: number;
  ageGroup?: number;
  toWork: boolean;
  toStudy: boolean;
  menAllowed: boolean;
  womenAllowed: boolean;
  withElectricity: boolean;
  withGas: boolean;
  withInternet: boolean;
  withWater: boolean;
}

export type CreateOfferDto = {
  id?: number;
  depositRequired: boolean;
  withWater: boolean;
  withInternet: boolean;
  withGas: boolean;
  withElectricity: boolean;
  rentPricing: string;
  depositAmount: string;
  minimumStay: number;
  ageGroup: number;
  toWork: boolean;
  toStudy: boolean;
  menAllowed: boolean;
  womenAllowed: boolean;
};

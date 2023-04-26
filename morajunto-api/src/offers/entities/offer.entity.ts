import { Property } from '~/properties/entities/property.entity';
import { User } from '~/users/entities/user.entity';

export class Offer {
  id?: number;
  propertyId: number;
  property: Property;
  userId: number;
  user: User;
  withElectricity: boolean;
  withGas: boolean;
  withInternet: boolean;
  withWater: boolean;
  depositRequired: boolean;
  rentPricing: string;
  depositAmount?: string;
  minimumStay?: number;
  ageGroup?: number;
  toWork: boolean;
  toStudy: boolean;
  menAllowed: boolean;
  womenAllowed: boolean;
}

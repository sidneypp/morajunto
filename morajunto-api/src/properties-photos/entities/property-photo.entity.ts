import { Property } from '~/properties';

export class PropertyFeature {
  id?: number;
  key: string;
  url: string;
  filename: string;
  size: number;
  type: string;
  propertyId: number;
  property?: Property;
  houseSection?: string;
}

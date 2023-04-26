import { Property } from '~/properties';

export class PropertyRule {
  id?: number;
  property?: Property;
  propertyId: number;

  smokingAllowed: boolean;
  childrenAllowed: boolean;
  petsAllowed: boolean;
  alcoholAllowed: boolean;
  guestsAllowed: boolean;
}

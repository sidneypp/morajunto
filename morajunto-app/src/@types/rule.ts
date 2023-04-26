export interface Rule {
  id?: number;
  propertyId?: number;
  smokingAllowed: boolean;
  childrenAllowed: boolean;
  petsAllowed: boolean;
  alcoholAllowed: boolean;
  guestsAllowed: boolean;
}

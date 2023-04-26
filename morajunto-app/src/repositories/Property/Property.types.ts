import { PropertyKind } from "@types";

export type CreatePropertyDto = {
  id?: number;
  kind: PropertyKind;
  area: number;
  address: {
    id?: number;
    zipcode: string;
    stateId: number;
    cityId: number;
    neighborhoodId: number;
    street: string;
    number: number;
    complement?: string;
  };
};

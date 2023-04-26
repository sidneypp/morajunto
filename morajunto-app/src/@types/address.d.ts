import { City } from "./city";
import { Neighborhood } from "./neighborhood";
import { State } from "./state";

export interface Address {
  id?: number;
  zipcode: string;
  state: State;
  stateId?: number;
  city: City;
  cityId?: number;
  neighborhood: Neighborhood;
  neighborhoodId?: number;
  street: string;
  number?: number;
  complement?: string;
}

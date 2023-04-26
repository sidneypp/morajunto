import { City } from '~/cities';
import { Neighborhood } from '~/neighborhoods';
import { State } from '~/states';

export class Address {
  id?: number;
  zipcode: string;
  state?: State;
  stateId: number;
  city?: City;
  cityId: number;
  neighborhoodId: number;
  neighborhood?: Neighborhood;
  street: string;
  number: number;
  complement?: string;
}

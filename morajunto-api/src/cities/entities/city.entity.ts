import { Address } from '~/addresses';
import { State } from '~/states';

export class City {
  id?: number;
  name: string;
  normalizedName: string;
  stateAcronym: string;
  state?: State[];
  addresses: Address[];
}

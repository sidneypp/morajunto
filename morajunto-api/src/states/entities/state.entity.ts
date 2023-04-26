import { Address } from '~/addresses';
import { City } from '~/cities';

export class State {
  id?: number;
  name: string;
  acronym: string;
  cities?: City[];
  addresses?: Address[];
}

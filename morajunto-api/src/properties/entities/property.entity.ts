import { Address } from '~/addresses/entities/address.entity';
import { User } from '~/users/entities/user.entity';

export type PropertyKind = 'apartament' | 'studio' | 'house';
export class Property {
  id?: number;
  kind: PropertyKind;
  area: number;
  addressId: number;
  address: Address;
  userId: number;
  user: User;
}

import { Address } from "./address";
import { Photo } from "./photo";
import { Tag } from "./tag";

export type PropertyKind = "apartment" | "studio" | "house";

export class Property {
  id?: number;
  kind: PropertyKind;
  area: number;
  address: Address;
  photos?: Photo[];
  tags?: Tag[];
}

import { City } from "./city";

export interface Neighborhood {
  id?: number;
  name: string;
  normalizedName: string;
  cityId: number;
  city?: City;
}

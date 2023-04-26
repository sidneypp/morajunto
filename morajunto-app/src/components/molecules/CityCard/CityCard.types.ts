import { City, Image, State } from "@types";

export type CityCardProps = {
  image: Image;
  state: Omit<State, "isAvailable">;
  city: Omit<City, "stateAcronym">;
};

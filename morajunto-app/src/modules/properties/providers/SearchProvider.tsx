import { City, Neighborhood } from "@types";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface SearchProps {
  city: City;
  setCity: Dispatch<SetStateAction<City>>;
  neighborhood?: Neighborhood;
  setNeighborhood: Dispatch<SetStateAction<Neighborhood | undefined>>;
}

export const SearchContext = createContext({} as SearchProps);

export const SearchProvider = ({
  children,
  city: defaultCity,
  neighborhood: defaultNeighborhood,
}: PropsWithChildren<Omit<SearchProps, "setCity" | "setNeighborhood">>) => {
  const [city, setCity] = useState<City>(defaultCity);
  const [neighborhood, setNeighborhood] = useState<Neighborhood | undefined>(
    defaultNeighborhood
  );

  return (
    <SearchContext.Provider
      value={{ city, setCity, neighborhood, setNeighborhood }}
    >
      {children}
    </SearchContext.Provider>
  );
};

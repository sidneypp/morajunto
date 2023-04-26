import { Divider } from "@mui/material";
import { City, Neighborhood } from "@types";
import { FilterForm } from "../components/FilterForm";
import { SearchProperties } from "../components/SearchProperties";
import { SearchProvider } from "../providers/SearchProvider";

export function SearchProperty({
  city,
  neighborhood,
}: {
  city: City;
  neighborhood?: Neighborhood;
}) {
  return (
    <SearchProvider city={city} neighborhood={neighborhood}>
      <Divider />
      <FilterForm />
      <SearchProperties />
    </SearchProvider>
  );
}

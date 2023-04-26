import { useQuery } from "react-query";
import {
  fetchCities,
  fetchCitiesByState,
  fetchCityByNormalizedName,
} from "./City.fetch";

const useCityRepository = () => {
  function getCities() {
    return useQuery({
      queryKey: "cities",
      queryFn: fetchCities,
    });
  }

  function findCityByNormalizedName(normalizedName?: string) {
    return useQuery({
      queryKey: `cities/${normalizedName}`,
      queryFn: () => fetchCityByNormalizedName(normalizedName!),
      enabled: Boolean(normalizedName),
    });
  }

  function getCitiesByState(stateAcronym?: string) {
    return useQuery({
      queryKey: `cities/${stateAcronym}`,
      queryFn: () => fetchCitiesByState(stateAcronym!),
      enabled: Boolean(stateAcronym),
    });
  }

  return { getCities, findCityByNormalizedName, getCitiesByState };
};

export default useCityRepository;

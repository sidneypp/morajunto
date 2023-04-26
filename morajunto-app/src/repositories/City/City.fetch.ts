import { fetchService } from "@services";
import { City } from "@types";

export const CITY_BASE_URL = "/cities";

export const fetchCities = async () => {
  const { data } = await fetchService.get<City[]>({
    url: CITY_BASE_URL,
  });
  return data;
};

export const fetchCityByNormalizedName = async (normalizedName: string) => {
  const { data } = await fetchService.get<City>({
    url: `${CITY_BASE_URL}/${normalizedName}`,
  });
  return data;
};

export const fetchCitiesByState = async (stateAcronym: string) => {
  const { data } = await fetchService.get<City[]>({
    url: `states/${stateAcronym}${CITY_BASE_URL}`,
  });
  return data;
};

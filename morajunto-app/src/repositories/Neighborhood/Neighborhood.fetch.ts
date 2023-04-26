import { fetchService } from "@services";
import { Neighborhood } from "@types";

export const NEIGHBORHOOD_BASE_URL = "/neighborhoods";

export const fetchNeighborhoods = async () => {
  const { data } = await fetchService.get<Neighborhood[]>({
    url: NEIGHBORHOOD_BASE_URL,
  });
  return data;
};

export const fetchNeighborhoodsByCity = async (cityId: number) => {
  const { data } = await fetchService.get<Neighborhood[]>({
    url: `/cities/${cityId}${NEIGHBORHOOD_BASE_URL}`,
  });
  return data;
};

export const fetchNeighborhoodsByNormalizedName = async (
  cityId: number,
  normalizedName: string
) => {
  const { data } = await fetchService.get<Neighborhood>({
    url: `/cities/${cityId}${NEIGHBORHOOD_BASE_URL}/${normalizedName}`,
  });
  return data;
};

import { useQuery } from "react-query";
import {
  fetchNeighborhoods,
  fetchNeighborhoodsByCity,
  fetchNeighborhoodsByNormalizedName,
} from "./Neighborhood.fetch";

const useNeighborhoodRepository = () => {
  function getNeighborhoods() {
    return useQuery({
      queryKey: "neighborhoods",
      queryFn: fetchNeighborhoods,
    });
  }

  function getNeighborhoodsByCity(cityId?: number) {
    return useQuery({
      queryKey: `neighborhoods/${cityId}`,
      queryFn: () => fetchNeighborhoodsByCity(cityId!),
      enabled: Boolean(cityId),
    });
  }

  function getNeighborhoodsByNormalizedName(
    cityId?: number,
    normalizedName?: string
  ) {
    return useQuery({
      queryKey: `neighborhoods/${cityId}`,
      queryFn: () =>
        fetchNeighborhoodsByNormalizedName(cityId!, normalizedName!),
      enabled: Boolean(cityId && normalizedName),
    });
  }

  return {
    getNeighborhoods,
    getNeighborhoodsByCity,
    getNeighborhoodsByNormalizedName,
  };
};

export default useNeighborhoodRepository;

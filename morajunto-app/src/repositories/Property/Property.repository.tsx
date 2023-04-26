import { useProperty } from "@modules/properties/hooks/useProperty";
import { fetchService } from "@services";
import { Property } from "@types";
import { useMutation, useQuery } from "react-query";
import { CreatePropertyDto } from "./Property.types";

export const PROPERTY_BASE_URL = "/properties";

const usePropertyRepository = () => {
  const { updateProperty } = useProperty();

  function getProperties() {
    return useQuery({
      queryKey: "properties",
      queryFn: async () => {
        const { data } = await fetchService.get<Property[]>({
          url: PROPERTY_BASE_URL,
        });
        return data;
      },
    });
  }

  function createProperty() {
    return useMutation({
      mutationFn: async (property: CreatePropertyDto) => {
        const { data } = await fetchService.post<Property>({
          url: PROPERTY_BASE_URL,
          data: property,
        });
        return data;
      },
      onSuccess: (property) => {
        updateProperty(property);
      },
    });
  }

  return { getProperties, createProperty };
};

export default usePropertyRepository;

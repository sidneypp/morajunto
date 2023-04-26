import { fetchService } from "@services";
import { Address } from "@types";
import { useMutation } from "react-query";

export const ADDRESS_BASE_URL = "/addresses";

const useAddressRepository = () => {
  function searchAddressByZipCode() {
    return useMutation({
      mutationFn: async (zipcode: string) => {
        const { data } = await fetchService.get<Address>({
          url: `${ADDRESS_BASE_URL}/${zipcode}/zipcodes`,
        });

        return data;
      },
    });
  }

  return { searchAddressByZipCode };
};

export default useAddressRepository;

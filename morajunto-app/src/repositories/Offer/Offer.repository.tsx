import { useProperty } from "@modules/properties/hooks/useProperty";
import { fetchService } from "@services";
import { Offer } from "@types";
import { useMutation } from "react-query";
import { CreateOfferDto } from "./Offer.types";

export const OFFER_BASE_URL = "/offers";

const useOfferRepository = () => {
  const { updateOffer } = useProperty();
  function createOffer(propertyId?: number) {
    return useMutation({
      mutationFn: async (offer: CreateOfferDto) => {
        const { data } = await fetchService.post<Offer>({
          url: `${OFFER_BASE_URL}/${propertyId}`,
          data: offer,
        });

        return data;
      },
      onSuccess: (data) => {
        updateOffer(data);
      },
    });
  }

  return { createOffer };
};

export default useOfferRepository;

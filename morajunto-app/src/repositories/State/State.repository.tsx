import { fetchService } from "@services";
import { State } from "@types";
import { useQuery } from "react-query";

export const STATE_BASE_URL = "/states";

const useStateRepository = () => {
  function getStates() {
    return useQuery({
      queryKey: "states",
      queryFn: async () => {
        const { data } = await fetchService.get<State[]>({
          url: STATE_BASE_URL,
        });
        return data;
      },
    });
  }

  return { getStates };
};

export default useStateRepository;

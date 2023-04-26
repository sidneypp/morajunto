import { fetchService } from "@services";
import { useMutation } from "react-query";
import { CreateAuthDto, CreateAuthResponse } from "./Auth.types";

export const AUTH_BASE_URL = "/auth";

const useAuthRepository = () => {
  function createAuth() {
    return useMutation({
      mutationFn: ({ email, password }: CreateAuthDto) => {
        return fetchService.post<CreateAuthResponse>({
          url: AUTH_BASE_URL,
          data: { email, password },
        });
      },
    });
  }

  return { createAuth };
};

export default useAuthRepository;

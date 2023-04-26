import { useAuth } from "@hooks";
import { fetchService } from "@services";
import { User } from "@types";
import { useMutation } from "react-query";
import { CreateUserDto, ShowAuthUserDto, UpdateUserDto } from "./User.types";

export const PUBLIC_USER_BASE_URL = "/users";
export const AUTH_USER_BASE_URL = "/user";

const useUserRepository = () => {
  const { updateUser: updateUserHook } = useAuth();

  function showAuthUser() {
    return useMutation({
      mutationFn: async ({ access_token }: ShowAuthUserDto) => {
        const { data } = await fetchService.get<User>({
          url: AUTH_USER_BASE_URL,
          config: {
            headers: { Authorization: `Bearer ${access_token}` },
          },
        });
        return data;
      },
    });
  }

  function createUser() {
    return useMutation({
      mutationFn: async ({ name, email, password }: CreateUserDto) => {
        const { data } = await fetchService.post<User>({
          url: PUBLIC_USER_BASE_URL,
          data: {
            name,
            email,
            password,
          },
        });
        return data;
      },
    });
  }

  function updateUser() {
    return useMutation({
      mutationFn: async (user: UpdateUserDto) => {
        const { data } = await fetchService.put<User>({
          url: AUTH_USER_BASE_URL,
          data: user,
        });
        return data;
      },
      onSuccess: (user) => {
        updateUserHook(user);
      },
    });
  }

  return { showAuthUser, createUser, updateUser };
};

export default useUserRepository;

import {
  CreateAuthDto,
  useAuthRepository,
  useUserRepository,
} from "@repositories";
import {
  getUser,
  removeUser,
  setUser as setUserCookie,
  UserWithToken,
} from "@services";
import Router from "next/router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { AuthContextType } from "./AuthProvider.types";

export const AuthContext = createContext({ user: {} } as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserWithToken>();

  const { mutateAsync: createAuth } = useAuthRepository().createAuth();
  const { mutateAsync: showAuthUser } = useUserRepository().showAuthUser();

  useEffect(() => {
    setUser(getUser());
  }, []);

  function updateUser(data: Partial<UserWithToken>) {
    const updatedUser = { ...user, ...data } as UserWithToken;
    setUser(updatedUser);
    setUserCookie(updatedUser);
  }

  async function singIn({ email, password }: CreateAuthDto) {
    const {
      data: { access_token },
    } = await createAuth({ email, password });
    const authUser = await showAuthUser({ access_token });

    if (authUser) {
      const userWithToken = { ...authUser, access_token };

      setUser(userWithToken);
      setUserCookie(userWithToken);

      Router.push("/");
    }
  }

  async function signOut() {
    setUser(undefined);
    removeUser();

    Router.push("/login");
  }

  return (
    <AuthContext.Provider value={{ user, updateUser, singIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

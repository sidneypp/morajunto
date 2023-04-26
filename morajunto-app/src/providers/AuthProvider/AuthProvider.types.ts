import { CreateAuthDto } from "@repositories";
import { UserWithToken } from "@services";

export type AuthContextType = {
  user?: UserWithToken;
  updateUser: (data: Partial<UserWithToken>) => void;
  singIn: (data: CreateAuthDto) => Promise<void>;
  signOut: () => Promise<void>;
};

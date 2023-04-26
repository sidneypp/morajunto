import { User } from "@types";

export interface UserWithToken extends Omit<User, "password"> {
  access_token: string;
}

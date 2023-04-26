import { Photo } from "@types";

export type ShowAuthUserDto = {
  access_token: string;
};

export type CreateUserDto = {
  name: string;
  email: string;
  password: string;
};

export type UpdateUserDto = {
  name: string;
  email: string;
  photo?: Photo;
  gender?: string;
  phoneNumber?: string;
  birthDate?: Date;
  document?: string;
};

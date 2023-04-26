import { Photo } from "./photo";

export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  photo?: Photo;
  gender?: string;
  phoneNumber?: string;
  birthDate?: Date;
  document?: string;
}

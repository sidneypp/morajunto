export type Gender = 'masculine' | 'feminine';

export class User {
  id: number;
  email: string;
  password: string;
  name: string;

  gender?: Gender;
  phoneNumber?: string;
  birthDate?: string;
  document?: string;

  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

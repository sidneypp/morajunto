export type CreateAuthDto = {
  email: string;
  password: string;
};

export type CreateAuthResponse = {
  access_token: string;
};

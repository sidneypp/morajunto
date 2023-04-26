import { GetServerSidePropsContext } from "next";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { UserWithToken } from "./User.types";

export const AUTH_COOKIE_NAME = "morajunto.user";
export const AUTH_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export const setUser = (user: UserWithToken) => {
  setCookie(undefined, AUTH_COOKIE_NAME, JSON.stringify(user), {
    maxAge: AUTH_MAX_AGE,
  });
};

export const getUser = (ctx?: GetServerSidePropsContext) => {
  const { [AUTH_COOKIE_NAME]: user = "{}" } = parseCookies(ctx);
  return JSON.parse(user) as UserWithToken;
};

export const removeUser = (ctx?: GetServerSidePropsContext) => {
  destroyCookie(ctx, AUTH_COOKIE_NAME);
};

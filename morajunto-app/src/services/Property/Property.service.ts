import { Property } from "@types";
import { GetServerSidePropsContext } from "next";
import { destroyCookie, parseCookies, setCookie } from "nookies";

export const PROPERTY_COOKIE_NAME = "morajunto.property";
export const PROPERTY_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export const setProperty = (property: Property) => {
  setCookie(undefined, PROPERTY_COOKIE_NAME, JSON.stringify(property), {
    maxAge: PROPERTY_MAX_AGE,
  });
};

export const getProperty = (ctx?: GetServerSidePropsContext) => {
  const { [PROPERTY_COOKIE_NAME]: property = "{}" } = parseCookies(ctx);
  return JSON.parse(property) as Property;
};

export const removeProperty = (ctx?: GetServerSidePropsContext) => {
  destroyCookie(ctx, PROPERTY_COOKIE_NAME);
};

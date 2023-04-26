import { Feature } from "@types";
import { GetServerSidePropsContext } from "next";
import { destroyCookie, parseCookies, setCookie } from "nookies";

export const FEATURE_COOKIE_NAME = "morajunto.feature";
export const FEATURE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export const setFeature = (feature: Feature) => {
  setCookie(undefined, FEATURE_COOKIE_NAME, JSON.stringify(feature), {
    maxAge: FEATURE_MAX_AGE,
  });
};

export const getFeature = (ctx?: GetServerSidePropsContext) => {
  const { [FEATURE_COOKIE_NAME]: feature = "{}" } = parseCookies(ctx);
  return JSON.parse(feature) as Feature;
};

export const removeFeature = (ctx?: GetServerSidePropsContext) => {
  destroyCookie(ctx, FEATURE_COOKIE_NAME);
};

import { Offer } from "@types";
import { GetServerSidePropsContext } from "next";
import { destroyCookie, parseCookies, setCookie } from "nookies";

export const OFFER_COOKIE_NAME = "morajunto.offer";
export const OFFER_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export const setOffer = (offer: Offer) => {
  setCookie(undefined, OFFER_COOKIE_NAME, JSON.stringify(offer), {
    maxAge: OFFER_MAX_AGE,
  });
};

export const getOffer = (ctx?: GetServerSidePropsContext) => {
  const { [OFFER_COOKIE_NAME]: offer = "{}" } = parseCookies(ctx);
  return JSON.parse(offer) as Offer;
};

export const removeOffer = (ctx?: GetServerSidePropsContext) => {
  destroyCookie(ctx, OFFER_COOKIE_NAME);
};

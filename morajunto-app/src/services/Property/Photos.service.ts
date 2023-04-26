import { Photo } from "@types";
import { GetServerSidePropsContext } from "next";
import { destroyCookie, parseCookies, setCookie } from "nookies";

export const PHOTOS_COOKIE_NAME = "morajunto.photos";
export const PHOTOS_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export const setPhotos = (photos: Photo[]) => {
  setCookie(undefined, PHOTOS_COOKIE_NAME, JSON.stringify(photos), {
    maxAge: PHOTOS_MAX_AGE,
  });
};

export const getPhotos = (ctx?: GetServerSidePropsContext) => {
  const { [PHOTOS_COOKIE_NAME]: photos = "[]" } = parseCookies(ctx);
  return JSON.parse(photos) as Photo[];
};

export const removePhotos = (ctx?: GetServerSidePropsContext) => {
  destroyCookie(ctx, PHOTOS_COOKIE_NAME);
};

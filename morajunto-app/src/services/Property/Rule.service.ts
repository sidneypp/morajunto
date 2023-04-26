import { Rule } from "@types";
import { GetServerSidePropsContext } from "next";
import { destroyCookie, parseCookies, setCookie } from "nookies";

export const RULE_COOKIE_NAME = "morajunto.rule";
export const RULE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export const setRule = (rule: Rule) => {
  setCookie(undefined, RULE_COOKIE_NAME, JSON.stringify(rule), {
    maxAge: RULE_MAX_AGE,
  });
};

export const getRule = (ctx?: GetServerSidePropsContext) => {
  const { [RULE_COOKIE_NAME]: rule = "{}" } = parseCookies(ctx);
  return JSON.parse(rule) as Rule;
};

export const removeRule = (ctx?: GetServerSidePropsContext) => {
  destroyCookie(ctx, RULE_COOKIE_NAME);
};

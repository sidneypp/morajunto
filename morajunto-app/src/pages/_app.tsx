import { CacheProvider, EmotionCache } from "@emotion/react";
import { GlobalProvider } from "@providers";
import { createEmotionCache } from "@services";
import theme from "@theme";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { ReactElement, ReactNode } from "react";
import * as Yup from "yup";
import { ptForm } from "yup-locale-pt";

Yup.setLocale(ptForm);

dayjs.extend(customParseFormat);

const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>MoraJunto</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <NextNProgress color={theme.palette.primary.main} />

      <GlobalProvider>{getLayout(<Component {...pageProps} />)}</GlobalProvider>
    </CacheProvider>
  );
}

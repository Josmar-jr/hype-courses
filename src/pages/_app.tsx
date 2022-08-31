import "../styles/globals.css";
import type { AppProps } from "next/app";
import { client, ssrCache } from "../lib/urql";
import { Provider } from "urql";
import { SessionProvider } from "next-auth/react"

function MyApp({
  Component,
  pageProps: { session, ...pageProps } }: AppProps
) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <SessionProvider session={session}>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;

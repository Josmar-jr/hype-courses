import "../styles/globals.css";
import type { AppProps } from "next/app";
import { client, ssrCache } from "../lib/urql";
import { Provider } from "urql";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

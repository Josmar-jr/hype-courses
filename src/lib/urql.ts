import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: `${process.env.NEXT_PUBLIC_API_URL}`,
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () => {
    const token = process.env.NEXT_PUBLIC_API_ACCESS_TOKEN;

    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  }
});

export { client, ssrCache };
import { createClient, ssrExchange, cacheExchange, fetchExchange } from 'urql';

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: 'https://api-eu-west-2.hygraph.com/v2/clp2pcg0t07e501un64kxeclj/master',
  exchanges: [cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };

import { ApolloClient } from '@apollo/client/core/ApolloClient.js';
import { createHttpLink } from '@apollo/client/link/http/createHttpLink.js';
import { InMemoryCache } from '@apollo/client/cache/index.js';
import fetch from 'node-fetch';

export default new ApolloClient({
  link: createHttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
    fetch: fetch,
  }),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    mutate: {
      fetchPolicy: 'no-cache',
    },
  },
});

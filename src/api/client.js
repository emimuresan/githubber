import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GITHUB_TOKEN } from 'react-native-dotenv';

const cache = new InMemoryCache();

/**
 * REMOTE DATA
 */
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${GITHUB_TOKEN}`
    }
  });

  return forward(operation);
});

const networkLink = middlewareLink.concat(httpLink);

/**
 * APOLLO CLIENT
 */
const client = new ApolloClient({
  link: ApolloLink.from([networkLink]),
  cache
});

export default client;

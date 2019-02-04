import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { GITHUB_TOKEN } from 'react-native-dotenv';
import { onError } from 'apollo-link-error';

const apolloCache = new InMemoryCache();

/**
 * REMOTE DATA
 */
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });

  return forward(operation);
});

const networkLink = middlewareLink.concat(httpLink);

/**
 * LOCAL DATA
 */
const defaults = {
  language: {
    value: 'JS',
    __typename: 'ProgrammingLanguage',
  },
};

const resolvers = {
  Mutation: {
    setLanguage: (_, { language }, { cache }) => {
      const newLanguage = { value: language, __typename: 'ProgrammingLanguage' };
      const data = { language: newLanguage };
      cache.writeData({ data });
      return newLanguage;
    },
  },
};

const stateLink = withClientState({
  cache: apolloCache,
  defaults,
  resolvers,
});

/**
 * ERROR HANDLING
 */

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`); // eslint-disable-line
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`); // eslint-disable-line
  }
});

/**
 * APOLLO CLIENT
 */
const client = new ApolloClient({
  link: ApolloLink.from([stateLink, errorLink, networkLink]), // order matters
  cache: apolloCache,
});

export default client;

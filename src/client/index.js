import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { GITHUB_TOKEN } from 'react-native-dotenv';

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
 * APOLLO CLIENT
 */
const client = new ApolloClient({
  link: ApolloLink.from([stateLink, networkLink]), // order matters
  cache: apolloCache,
});

export default client;

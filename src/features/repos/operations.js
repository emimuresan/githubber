import gql from 'graphql-tag';

export const GET_REPOSITORIES = gql`
  query GetRepositiories($byLanguage: String!) {
    search(type: REPOSITORY, query: $byLanguage, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          nameWithOwner
          url
          description
          forkCount
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

export const GET_LANGUAGE = gql`
  {
    language @client {
      value
    }
  }
`;

export const SET_LANGUAGE = gql`
  mutation SetLanguage($language: String!) {
    setLanguage(language: $language) @client {
      language
    }
  }
`;

import gql from 'graphql-tag';

const GET_REPOSITORIES = gql`
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

export { GET_REPOSITORIES };

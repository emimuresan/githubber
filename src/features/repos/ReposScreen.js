import React from 'react';
import { Query, graphql } from 'react-apollo';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import RepoListView from './RepoListView';
import { GET_REPOSITORIES } from './queries';

class ReposScreen extends React.Component {
  static navigationOptions = {
    title: 'Popular Repos'
  };

  render() {
    const languageString = 'language:JavaScript';
    return (
      <Query query={GET_REPOSITORIES} variables={{ byLanguage: languageString }}>
        {({ loading, error, data }) => {
          if (loading) {
            <Loading />;
          }
          if (error) {
            return <Error title="Failed to load repositories" details={error.message} />;
          }

          const repositories = data.search ? data.search.nodes : null;
          return null;
          // <RepoListView repositories={repositories} selectedLanguage="JS" />;
        }}
      </Query>
    );
  }
}

export default ReposScreen;

import React from 'react';
import { Query } from 'react-apollo';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import RepoListView from './RepoListView';
import { GET_REPOSITORIES } from './queries';

class ReposScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Most Popular Repos',
  };

  render() {
    const languageString = 'language:JavaScript';
    return (
      <Query query={GET_REPOSITORIES} variables={{ byLanguage: languageString }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <Error title="Failed to load repositories" details={error.message} />;
          }

          const repos = data.search ? data.search.nodes : null;
          return <RepoListView repos={repos} selectedLanguage="JS" />;
        }}
      </Query>
    );
  }
}

export default ReposScreen;

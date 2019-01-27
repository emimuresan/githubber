import React from 'react';
import { Query } from 'react-apollo';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
// import RepoListView from './RepoListView';
import { GET_REPOSITORIES } from './queries';

class ReposScreen extends React.Component {
  static navigationOptions = {
    title: 'Popular Repos',
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

          const repositories = data.search ? data.search.nodes : null;
          console.log('repos:', repositories);
          return null;
          // <RepoListView repositories={repositories} selectedLanguage="JS" />;
        }}
      </Query>
    );
  }
}

export default ReposScreen;

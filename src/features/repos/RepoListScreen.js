import React from 'react';
import { Query } from 'react-apollo';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import RepoListView from './RepoListView';
import { GET_REPOSITORIES } from './queries';

class ReposScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: `🎉 ${navigation.getParam('selectedLanguage')} Repos`,
  });

  render() {
    const selectedLanguage = this.props.navigation.getParam('selectedLanguage');

    return (
      <Query query={GET_REPOSITORIES} variables={{ byLanguage: `language:${selectedLanguage}` }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <Error title="Failed to load repositories" details={error.message} />;
          }

          const repos = data.search ? data.search.nodes : null;
          return <RepoListView repos={repos} />;
        }}
      </Query>
    );
  }
}

export default ReposScreen;

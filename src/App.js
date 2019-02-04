// @flow
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { persistCache } from 'apollo-cache-persist';
import { AsyncStorage } from 'react-native';
import AppContainer from './navigation/AppContainer';
import client from './client';

class App extends React.Component {
  state = {
    isCacheLoaded: false,
  };

  async componentDidMount() {
    try {
      // Persisting cache for offline support
      await persistCache({
        cache: client.cache,
        storage: AsyncStorage,
        key: 'githubber-app',
        debug: true,
      });
    } catch (err) {
      console.error('Error attempting to restore the apollo cache', err); // eslint-disable-line
    }

    this.setState({
      isCacheLoaded: true,
    });
  }

  render() {
    if (!this.state.isCacheLoaded) {
      return null;
    }

    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}

export default App;

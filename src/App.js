// @flow
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import AppContainer from './navigation/AppContainer';
import client from './client';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}

export default App;

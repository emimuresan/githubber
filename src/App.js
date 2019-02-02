// @flow
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './features/home/HomeScreen';
import RepoSelectionScreen from './features/repos/RepoSelectionScreen';
import RepoListScreen from './features/repos/RepoListScreen';
import routes from './navigation/routes';
import client from './api/client';

const RootStack = createStackNavigator(
  {
    [routes.HOME]: HomeScreen,
    [routes.REPO_SELECTION]: RepoSelectionScreen,
    [routes.REPO_LIST]: RepoListScreen,
  },
  {
    initialRouteName: routes.HOME,
  },
);

const AppContainer = createAppContainer(RootStack);

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

// @flow
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './features/home/HomeScreen';
import routes from './navigation/routes';
import client from './api/client';

const RootStack = createStackNavigator(
  {
    [routes.HOME]: HomeScreen
  },
  {
    initialRouteName: routes.HOME
  }
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
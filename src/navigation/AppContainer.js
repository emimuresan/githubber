import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../features/home/HomeScreen';
import RepoSelectionScreen from '../features/repos/RepoSelectionScreen';
import RepoListScreen from '../features/repos/RepoListScreen';
import routes from './routes';

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

export default createAppContainer(RootStack);

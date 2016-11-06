import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  pokemons: () => HomeScreen,
  rootNavigation: () => RootNavigation,
}));

import {
  createRouter,
} from '@exponent/ex-navigation';

import PokemonsListScreen from 'learnapollo/screens/PokemonsListScreen';
import PokemonDetailScreen from 'learnapollo/screens/PokemonDetailScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  pokemonsList: () => PokemonsListScreen,
  pokemonDetail: () => PokemonDetailScreen,
  rootNavigation: () => RootNavigation,
}));

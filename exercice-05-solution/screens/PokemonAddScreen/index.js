import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { BaseText } from 'learnapollo/components/BaseText';
import { PokemonAddFormWithMutation  } from './components/PokemonAddForm';
import Router from 'learnapollo/navigation/Router';

export default class PokemonsListScreen extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: '#22A699',
      tintColor: '#fff',
      title: (route) => {
        return 'Add a new pokemon';
      },
    }
  }

  _resetStack = (pokemon) => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('main').jumpToTab('pokemons')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PokemonAddFormWithMutation 
          onSave={this._resetStack}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    marginBottom: 20,
    marginHorizontal: 15,
  },

});

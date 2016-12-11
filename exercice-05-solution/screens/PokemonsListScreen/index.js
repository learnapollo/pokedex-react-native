import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { BaseText } from 'learnapollo/components/BaseText';
import Router from 'learnapollo/navigation/Router';
import { PokemonsListWithData} from 'learnapollo/screens/PokemonsListScreen/components/PokemonsList';

export default class PokemonsListScreen extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: '#22A699',
      tintColor: '#fff',
      title: (route) => {
        return 'LearnApollo';
      },
    }
  }

  _goToDetail = (pokemon) => {
    this.props.navigation
      .getNavigator('root')
      .push(Router.getRoute('pokemonDetail', { pokemon }));
  }


  render() {
    return (
      <View style={styles.container}>
        <PokemonsListWithData onRowPress={this._goToDetail}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 10,
    marginBottom: 20,
    marginHorizontal: 15
  },
});

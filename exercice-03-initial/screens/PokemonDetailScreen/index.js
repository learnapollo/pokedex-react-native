import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { BaseText } from 'learnapollo/components/BaseText';
import { PokemonDetail } from 'learnapollo/screens/PokemonDetailScreen/components/PokemonDetail';

export default class PokemonDetailScreen extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: '#22A699',
      tintColor: '#fff',
      title: (params) => {
        return `Detail of ${params.pokemon.name}`;
      },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <PokemonDetail pokemon={this.props.route.params.pokemon}/>
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

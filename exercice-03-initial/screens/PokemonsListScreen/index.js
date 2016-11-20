import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { BaseText } from 'learnapollo/components/BaseText';
import Router from 'learnapollo/navigation/Router';
import { TitleWithData } from 'learnapollo/screens/PokemonsListScreen/components/Title';

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
        <View style={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <TitleWithData />
          </View>
        </View>
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
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});

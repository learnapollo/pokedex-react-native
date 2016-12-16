import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { graphql } from 'react-apollo';

import gql from 'graphql-tag';
import { propType } from 'graphql-anywhere';

import { BaseText } from 'learnapollo/components/BaseText';

export class Title extends React.Component {
  static fragments = {
    trainer: gql`
      fragment TitleTrainer on Trainer {
        id
        name
        ownedPokemons {
          id
        }
      }
    `
  }

  render() {
    return (
      <View style={styles.container}>
        <BaseText
          fontFace="source-sans"
          style={{fontSize: 14}}
        >
          Hey {this.props.trainer.name}, there are {this.props.trainer.ownedPokemons.length} Pokemons in your pokedex
        </BaseText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15
  }
})

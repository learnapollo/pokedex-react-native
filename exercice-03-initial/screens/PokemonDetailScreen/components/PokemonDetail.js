import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Image,
  View,
} from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { BaseText } from 'learnapollo/components/BaseText';

export class PokemonDetail extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
        onPress={() => this.props.onPress(this.props.pokemon)}
      >
        <Image
          style={styles.image}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        />
        <View style={styles.text}>
          <BaseText
            fontFace="lato-bold"
            style={{ fontSize:  16 }}
          >
            Name
          </BaseText>
          <BaseText
            fontFace="source-sans"
            style={{ fontSize:  14 }}
          >
            Pikachu
          </BaseText>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingVertical: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  image: {
    marginTop: 20,
    width: 220,
    height: 220
  }
});

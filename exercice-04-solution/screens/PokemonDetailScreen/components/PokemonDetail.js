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
    if (this.props.data.error) {
      return (
        <View style={styles.container} >
          <BaseText
            fontFace="source-sans"
            style={{fontSize: 14, color: 'red'}}
          >
            Sadly, the requested Pokemon does not exist yet.
          </BaseText>
        </View>
      );
    }

    if (this.props.data.loading) {
      return (
        <View style={styles.container} >
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View
        style={styles.container}
        onPress={() => this.props.onPress(this.props.pokemon)}
      >
        <Image
          style={styles.image}
          source={{ uri: this.props.data.Pokemon.url }}
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
            {this.props.data.Pokemon.name}
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

const PokemonQuery = gql`
  query PokemonQuery($id: ID!) {
    Pokemon(id: $id) {
      id
      url
      name
    }
  }
`

export const PokemonDetailWithData = graphql(PokemonQuery, {
  options: ({ pokemon }) => {
    return {
      variables: {
        id: pokemon.id
      }
    }
  }
})(PokemonDetail)

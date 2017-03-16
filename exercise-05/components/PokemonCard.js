import React from 'react'
import { propType } from 'graphql-anywhere'
import gql from 'graphql-tag'

import { View, TextInput, Image } from 'react-native'

export const pokemonCardFragments = {
  pokemon: gql`
    fragment PokemonCardPokemon on Pokemon {
      id
      url
      name
    }
  `
}

export default class PokemonCard extends React.Component {

  static propTypes = {
    pokemon: propType(pokemonCardFragments.pokemon).isRequired,
  }

  render () {

    return (
      <View>
        <View>
          <TextInput
            style={{
              padding: 20,
              height: 60,
            }}
            editable={false}
            value={this.props.pokemon.name}
          />
          <TextInput
            style={{
              padding: 20,
              height: 60,
            }}
            editable={false}
            value={this.props.pokemon.url}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 12
          }}
        >
          <Image
            source={{ uri: this.props.pokemon.url }}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain'
            }}
          />
        </View>
      </View>
    )
  }
}

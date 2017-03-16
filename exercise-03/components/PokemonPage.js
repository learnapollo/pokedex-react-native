import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { View, Text } from 'react-native'

import PokemonCard from './PokemonCard'

class PokemonPage extends React.Component {

  render () {

    return (
      <View
        style={{
          flex: 1,
          marginTop: 64
        }}
      >
        <Text>PokemonPage</Text>
      </View>
    )
  }
}

export default PokemonPage
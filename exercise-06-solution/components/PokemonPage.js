import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { filter } from 'graphql-anywhere'
import { View, Text } from 'react-native'
import PokemonCard, { pokemonCardFragments } from './PokemonCard'

class PokemonPage extends React.Component {

  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      Pokemon: React.PropTypes.object,
    }).isRequired,
  }

  render () {
    if (this.props.data.loading) {
      return (<Text style={{marginTop: 64}}>Loading</Text>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<View style={{marginTop: 64}}>An unexpected error occurred</View>)
    }

    const pokemon = this.props.data.Pokemon

    return (
      <View
        style={{
          flex: 1,
          marginTop: 64
        }}
      >
        <PokemonCard pokemon={filter(pokemonCardFragments.pokemon, pokemon)}/>
      </View>
    )
  }
}

const PokemonQuery = gql`query PokemonQuery($id: ID!) {
  Pokemon(id: $id) {
    id
    ...PokemonCardPokemon
  }
}
${pokemonCardFragments.pokemon}
`

const PokemonPageWithData = graphql(PokemonQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.pokemonId
    },
  }),
})(PokemonPage)

export default PokemonPageWithData

import React from 'react'
import { graphql } from 'react-apollo'
import { ScrollView, View, Image, Button } from 'react-native'
import gql from 'graphql-tag'
import CustomText from './CustomText'


import PokemonPreview from './PokemonPreview'

class Pokedex extends React.Component {

  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      Trainer: React.PropTypes.object,
    }).isRequired,
  }

  render () {
    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<CustomText style={{marginTop: 64}}>An unexpected error occurred</CustomText>)
    }

    if (this.props.data.loading || !this.props.data.Trainer) {
      return (<CustomText style={{marginTop: 64}}>Loading</CustomText>)
    }

    return (
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <CustomText
          style={{
            marginTop: 64,
            padding: 16,
            fontSize: 24,
            textAlign: 'center'
          }}
        >
          Hey {this.props.data.Trainer.name}!
        </CustomText>
        <CustomText
          style={{
            padding: 16,
            paddingTop: 0,
            fontSize: 18,
            textAlign: 'center'
          }}
        >
          There are {this.props.data.Trainer.ownedPokemons.length} Pokemons in your pokedex
        </CustomText>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              margin: 6,
            }}
          >
            {this.props.data.Trainer.ownedPokemons.map((pokemon) =>
              <PokemonPreview key={pokemon.id} pokemon={pokemon} />
            )}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const TrainerQuery = gql`query TrainerQuery($name: String!) {
  Trainer(name: $name) {
    id
    name
    ownedPokemons {
      id
      name
      url
    }
  }
}`

const PokedexWithData = graphql(TrainerQuery, {
  options: {
    variables: {
      name: '__NAME__'
    }
  }
})(Pokedex)

export default PokedexWithData

import React from 'react'
import { propType } from 'graphql-anywhere'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import { View, TextInput, Image } from 'react-native'
import Button from './Button'

import { Actions } from 'react-native-router-flux'

export const pokemonCardFragments = {
  pokemon: gql`
      fragment PokemonCardPokemon on Pokemon {
        id
        url
        name
      }
    `
}

class PokemonCard extends React.Component {

  static propTypes = {
    pokemon: propType(pokemonCardFragments.pokemon).isRequired,
    updatePokemon: React.PropTypes.func.isRequired,
    deletePokemon: React.PropTypes.func.isRequired,
  }

  state = {
    name: this.props.pokemon.name,
    url: this.props.pokemon.url,
  }

  render () {

    let updateButton = null
    if (this.canUpdate()) {
      updateButton = <Button
        title='Update'
        onPress={this.handleUpdate}
      />
    }

    return (
      <View>
        <View>
          <TextInput
            style={{
              padding: 20,
              height: 60,
            }}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            placeholder='Type a name...'
          />
          <TextInput
            style={{
              padding: 20,
              height: 60,
            }}
            onChangeText={(url) => this.setState({url})}
            value={this.state.url}
            placeholder='Image Url'
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
          <Button
            title='Delete'
            onPress={this.handleDelete}
            color='red'
          />
          {updateButton}
        </View>
      </View>
    )
  }

  canUpdate = () => {
    return this.state.name && this.state.url &&
      (this.props.pokemon.name !== this.state.name || this.props.pokemon.url !== this.state.url)
  }

  handleUpdate = async () => {
    await this.props.updatePokemon({variables: { id: this.props.pokemon.id, name: this.state.name, url: this.state.url }})

    Actions.pokedex()
  }

  handleDelete = async () => {
    await this.props.deletePokemon({variables: { id: this.props.pokemon.id }})

    Actions.pokedex()
  }
}

const updatePokemon = gql`
  mutation updatePokemon($id: ID!, $name: String!, $url: String!) {
    updatePokemon(id: $id, name: $name, url: $url) {
      id
      ... PokemonCardPokemon
    }
  }
  ${pokemonCardFragments.pokemon}
`

const deletePokemon = gql`
  mutation deletePokemon($id: ID!) {
    deletePokemon(id: $id) {
      id
    }
  }
`

const PokemonCardWithMutations =  graphql(deletePokemon, {name : 'deletePokemon'})(
  graphql(updatePokemon, {name: 'updatePokemon'})(PokemonCard)
)

export default PokemonCardWithMutations

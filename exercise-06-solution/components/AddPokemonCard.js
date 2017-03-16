import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { View, Image, TextInput, Dimensions } from 'react-native'
import Button from './Button'
import { Actions } from 'react-native-router-flux'

class AddPokemonCard extends React.Component {

  static propTypes = {
    mutate: React.PropTypes.func.isRequired,
    trainerId: React.PropTypes.string.isRequired,
  }

  state = {
    name: '',
    url: '',
  }

  render () {
    const {height, width} = Dimensions.get('window')
    let saveButton = null
    if (this.canSave()) {
      saveButton = <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 12
          }}
        >
          <Button
            title='Save'
            onPress={this.handleSave}
          />
        </View>
    }

    let image = null
    if (this.canSave()) {
      image = <Image
        source={{ uri: this.state.url }}
        style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
          }}
      />
    }

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: 64
        }}
      >
        <View style={{
          width: width - 40
        }}>
          <TextInput
            style={{
              marginTop: 20,
              padding: 20,
              backgroundColor: 'rgba(0,0,0,.05)',
              height: 60,
            }}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            placeholder='Name'
          />
          <TextInput
            style={{
              marginTop: 20,
              marginBottom: 20,
              padding: 20,
              height: 60,
              backgroundColor: 'rgba(0,0,0,.05)',
            }}
            onChangeText={(url) => this.setState({url})}
            value={this.state.url}
            placeholder='Image Url'
          />
          {image}
        </View>
        {saveButton}
      </View>
    )
  }

  canSave = () => {
    return this.state.name && this.state.url
  }

  handleSave = async () => {
    const {name, url} = this.state
    const trainerId = this.props.trainerId
    await this.props.mutate({variables: {name, url, trainerId}})

    Actions.pokedex()
  }
}

const createPokemonMutation = gql`
  mutation createPokemon($name: String!, $url: String!, $trainerId: ID) {
    createPokemon(name: $name, url: $url, trainerId: $trainerId) {
      id
    }
  }
`

const AddPokemonCardWithMutation = graphql(createPokemonMutation)(AddPokemonCard)

export default AddPokemonCardWithMutation

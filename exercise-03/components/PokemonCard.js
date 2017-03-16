import React from 'react'

import { View, TextInput, Image } from 'react-native'

export default class PokemonCard extends React.Component {

  static propTypes = {
    pokemon: React.PropTypes.object.isRequired,
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
            placeholder='Type a name...'
          />
          <TextInput
            style={{
              padding: 20,
              height: 60,
            }}
            editable={false}
            value={this.props.pokemon.url}
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
        </View>
      </View>
    )
  }
}

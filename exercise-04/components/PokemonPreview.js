import React from 'react'
import { View, Image, TouchableHighlight, Dimensions } from 'react-native'
import CustomText from './CustomText'

import { Actions } from 'react-native-router-flux'

export default class PokemonPreview extends React.Component {

  static propTypes = {
    pokemon: React.PropTypes.object,
  }

  render () {
    const pokemonId = this.props.pokemon.id
    const {height, width} = Dimensions.get('window')

    return (
      <View
          style={{
            margin: 6,
            height: (width / 2) - 18,
            width: (width / 2) - 18,
            backgroundColor: 'white',
            padding: 16,
          }}
          shadowColor='rgba(0,0,0,0.25)'
          shadowOffset={{
            width: 0,
            height: 2
          }}
          shadowOpacity={0.5}
          shadowRadius={1}
        >
        <TouchableHighlight
          onPress={() => Actions.pokemonPage({pokemonId})}
          underlayColor='lightgray'
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'column'
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
            <CustomText
              style={{
                height: 20,
                marginTop: 20
              }}
            >{this.props.pokemon.name}</CustomText>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

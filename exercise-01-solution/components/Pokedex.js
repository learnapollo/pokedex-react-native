import React from 'react'
import { View } from 'react-native'
import CustomText from './CustomText'

export default class Pokedex extends React.Component {

  render () {

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
          Hey!
        </CustomText>
        <CustomText
          style={{
            padding: 16,
            paddingTop: 0,
            fontSize: 18,
            textAlign: 'center'
          }}
        >
          There are 0 Pokemons in your pokedex
        </CustomText>
      </View>
    )
  }
}

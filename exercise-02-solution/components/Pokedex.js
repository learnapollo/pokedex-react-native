import React from 'react'
import { graphql } from 'react-apollo'
import { View } from 'react-native'
import CustomText from './CustomText'
import gql from 'graphql-tag'

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
          There are 0 Pokemons in your pokedex
        </CustomText>
      </View>
    )
  }
}

const TrainerQuery = gql`query TrainerQuery {
  Trainer(name: "__NAME__") {
     name
   }
 }`

const PokedexWithData = graphql(TrainerQuery)(Pokedex)

export default PokedexWithData

import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


import { BaseText } from 'learnapollo/components/BaseText';

export class Title extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  }

  render() {
    if (this.props.data.error) {
      return (
        <BaseText
          fontFace="source-sans"
          style={{fontSize: 14, color: 'red'}}
        >
          Sadly, the requested Trainer does not exist yet.
        </BaseText>
      );
    }

    if (this.props.data.loading) {
      return <ActivityIndicator />
    }
    
    return (
      <BaseText
        fontFace="source-sans"
        style={{fontSize: 14}}
      >
        Hey {this.props.data.Trainer.name}, there are 0 Pokemons in your pokedex
      </BaseText>
    )
  }
}

const TrainerQuery = gql`query {
  Trainer(name: "__NAME__") {
    id
    name
  }
}`

export const TitleWithData = graphql(TrainerQuery)(Title)

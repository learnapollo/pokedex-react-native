import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { BaseText } from 'learnapollo/components/BaseText';

export class Title extends React.Component {
  render() {
    return (
      <BaseText
        fontFace="lato-bold"
        style={{fontSize: 22}}
      >
        Hey __NAME__, there are 0 Pokemons in your pokedex
      </BaseText>
    )
  }
}

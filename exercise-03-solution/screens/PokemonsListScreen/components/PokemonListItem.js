import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import { BaseText } from 'learnapollo/components/BaseText';

export class PokemonListItem extends React.Component {
  static propTypes = {
    pokemon: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.onPress(this.props.pokemon)}
      >
        <Image
          style={styles.image}
          source={{ uri: this.props.pokemon.url }}
        />
        <View style={styles.text}>
          <BaseText
            fontFace="source-sans"
            style={{ fontSize: 14 }}
          >
            {this.props.pokemon.name}
          </BaseText>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    paddingVertical: 5,
    alignSelf: 'stretch',
  },
  text: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  image: {
    width: 50,
    height: 50
  }
});

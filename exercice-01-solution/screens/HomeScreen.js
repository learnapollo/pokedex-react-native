import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { BaseText } from 'learnapollo/components/BaseText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: (route) => {
        return 'LearnApollo';
      },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <BaseText
            fontFace="lato-bold"
            style={{fontSize: 22}}
          >
            Pokedex
          </BaseText>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});

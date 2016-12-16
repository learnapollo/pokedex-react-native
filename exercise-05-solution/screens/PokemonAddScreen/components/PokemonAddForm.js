import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import {
  Font,
} from 'exponent';

import { View, Image, TextInput, Button, StyleSheet } from 'react-native';
import Colors from 'learnapollo/constants/Colors';

export class PokemonAddForm extends React.Component {
  static propTypes = {
    // mutate: React.PropTypes.func.isRequired,
  }
  state = {
    name: '',
    url: '',
  }

  canSave = () => {
    return this.state.name && this.state.url;
  }

  onSubmitName = () => {
    this.refs.url.focus();
  }

  onSubmitUrl = () => {
    this.handleSave();
  }

  handleSave = () => {
    const {name, url} = this.state;
    const trainerId = "civqmmeua1vd50151jav3v1m6";
    this.props.mutate({variables: {name, url, trainerId}})
      .then(() => {
        this.setState({
          name: '',
          url: '',
        }, this.props.onSave);
      });
  }

  render () {
    return (
      <View style={styles.formContainer}>
        <View style={{ alignSelf: 'stretch'}}>
          <TextInput
            ref="name"
            style={[styles.input, Font.style('source-sans')]}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            placeholder='Name'
            autoFocus
            autoCorrect={false}
            autoCapitalize="none"
            onSubmitEditing={this.onSubmitName}
            returnKeyType="next"
          />
        </View>
        <View style={{  alignSelf: 'stretch' }}>
          <TextInput
            ref="url"
            style={[styles.input, Font.style('source-sans')]}
            onChangeText={(url) => this.setState({url})}
            value={this.state.url}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Image Url'
            autoFocus
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="url"
            onSubmitEditing={this.onSubmitImageUrl}
            returnKeyType="go"
          />
        </View>
        {this.state.url == '' 
          ? <View style={styles.image} /> 
          : <Image
          source={{ uri: this.state.url }}
          style={[styles.image, {resizeMode: 'contain'}]}
        />}
        
        <View
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
            color={Colors.tintColor}
            style={styles.button}
          />
        </View>
      </View>
    );
  }
}

const createPokemonMutation = gql`
  mutation createPokemon($name: String!, $url: String!, $trainerId: ID) {
    createPokemon(name: $name, url: $url, trainerId: $trainerId) {
      trainer {
        id
        ownedPokemons {
          id
        }
      }
    }
  }
`

export const PokemonAddFormWithMutation = graphql(createPokemonMutation)(PokemonAddForm)

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: Colors.tintColor,
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150
  }
});
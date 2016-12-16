import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  ActivityIndicator,
  RecyclerViewBackedScrollView as RecyclerScrollView,
} from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { filter } from 'graphql-anywhere';

import { BaseText } from 'learnapollo/components/BaseText';

import { PokemonListItem } from 'learnapollo/screens/PokemonsListScreen/components/PokemonListItem';
import { Title } from 'learnapollo/screens/PokemonsListScreen/components/Title';

export class PokemonsList extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id
    });
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    if (!data.loading && !data.error) {
      const { dataSource } = this.state;
      this.setState({
        dataSource: dataSource.cloneWithRows(data.Trainer.ownedPokemons),
      });
    }
  }

  render() {
    if (this.props.data.error) {
      return (
        <View style={styles.container} >
          <BaseText
            fontFace="source-sans"
            style={{fontSize: 14, color: 'red'}}
          >
            Sadly, the requested Trainer does not exist yet.
          </BaseText>
        </View>
      );
    }

    if (this.props.data.loading) {
      return (
        <View style={styles.container} >
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <ListView
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={this._renderItem}
        renderHeader={this._renderHeader}
        renderScrollComponent={props => <RecyclerScrollView {...props} />}
        renderSeparator={this._renderSeparator}
        style={styles.listView}
        pageSize={1}
        initialListSize={10}
      />
    );
  }

  _renderItem = (pokemon) => (
    <PokemonListItem 
      pokemon={filter(PokemonListItem.fragments.pokemon, pokemon)} 
      onPress={this.props.onRowPress}
    />
  );

  _renderHeader = (trainer) => (
    <Title 
      trainer={filter(Title.fragments.trainer, this.props.data.Trainer)} 
    />
  );

  _renderSeparator = (sectionID, rowID) => (
    <View
      key={`${sectionID}-${rowID}`}
      style={{
        height: 1,
        backgroundColor: '#CCCCCC',
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TrainerQuery = gql`
  query {
    Trainer(name: "__NAME__") {
      ...TrainerTitle
      ownedPokemons {
        ...PokemonListItemPokemon
      }
    }
  }
  ${Title.fragments.trainer}
  ${PokemonListItem.fragments.pokemon}
`

export const PokemonsListWithData = graphql(TrainerQuery)(PokemonsList)

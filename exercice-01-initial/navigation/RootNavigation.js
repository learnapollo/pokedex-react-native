import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Font } from 'exponent';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import {
  Ionicons,
} from '@exponent/vector-icons';
import { BaseText } from 'learnapollo/components/BaseText';

import Colors from '../constants/Colors';
import Router from '../navigation/Router';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: Colors.navigationBarTintColor,
    backgroundColor: Colors.navigationBarBackgroundColor,
    titleStyle: Font.style('lato-bold'),
  },
};

export default class RootNavigation extends React.Component {
  render() {
    return (
      <TabNavigation
        tabBarHeight={56}
        initialTab="pokemons">
        <TabNavigationItem
          id="pokemons"
          renderIcon={isSelected => this._renderIcon('Pokemons', 'ios-paper', isSelected)}>
          <StackNavigation 
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('pokemons')} 
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  _renderIcon(title, iconName, isSelected) {
    let color = isSelected ? Colors.tabIconSelected : Colors.tabIconDefault;

    return (
      <View style={styles.tabItemContainer}>
        <Ionicons
          name={`${iconName}${!isSelected ? '-outline' : ''}`}
          size={28}
          color={color}
        />
        <BaseText
          fontFace="lato-bold"
          style={[styles.tabTitleText, {color}]} 
          numberOfLines={1}
        >
          {title}
        </BaseText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitleText: {
    fontSize: 11,
  },
});

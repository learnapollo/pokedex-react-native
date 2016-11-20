import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import { tint } from 'learnapollo/constants/Colors.js';

import Store from 'learnapollo/state/Store';
import Router from 'learnapollo/navigation/Router';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

import cacheAssetsAsync from 'learnapollo/utilities/cacheAssetsAsync';


class AppContainer extends Component {
  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [],
        fonts: [
          {'lato-bold': require('./assets/fonts/Lato-Bold.ttf')},
          {'source-sans': require('./assets/fonts/SourceSansPro-Regular.ttf')},
        ],
      });
    } catch(e) {
      console.warn(`There was an error caching assets, so we skipped caching. Reload the app to try again.`);
    } finally {
      this.setState({appIsReady: true});
    }
  }

  render() {
    if (this.state.appIsReady) {
      let { notification } = this.props.exp;
      let initialRoute = Router.getRoute('rootNavigation', {notification});

      return (
        <View style={styles.container}>
          <NavigationProvider router={navigationContext}>
            <StackNavigation
              id="root"
              initialRoute={initialRoute}
            />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        </View>
      );
    } else {
      return <Exponent.Components.AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: tint,
  },
});

Exponent.registerRootComponent(AppContainer);

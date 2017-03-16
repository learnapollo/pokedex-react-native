import React from 'react'
import { Actions, Scene, Router } from 'react-native-router-flux'

import Pokedex from './components/Pokedex'

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='pokedex' component={Pokedex} title='Pokedex' initial={true} type='replace' />
  </Scene>
)

export default class App extends React.Component {
  render() {
    return (
        <Router scenes={scenes}/>
    )
  }
}

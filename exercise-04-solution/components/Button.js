import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class CustomText extends React.Component {


  static propTypes = {
    title: React.PropTypes.string,
    onPress: React.PropTypes.func
  }

  render() {
    const {title, textStyle, containerStyle, onPress} = this.props

    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 16,
            paddingRight: 16,
            backgroundColor: '#2BC3A1',
            margin: 8,
            ...containerStyle
          }}
        >
          <Text
            style={{
              color: '#7F7F7F',
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              ...textStyle
            }}
          >{title}</Text>
        </View>
      </TouchableOpacity>

    )
  }
}

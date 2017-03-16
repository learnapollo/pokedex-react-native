import React from 'react'
import { Text } from 'react-native'

export default class CustomText extends React.Component {
  render() {
    const {children, style} = this.props

    return (
      <Text
        style={{
          color: '#7F7F7F',
          ...style
        }}
      >{children}</Text>
    )
  }
}

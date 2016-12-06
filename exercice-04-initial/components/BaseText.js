// @flow

import React from 'react';
import {
  Text as RNText,
  StyleSheet,
} from 'react-native';
import {
  Font,
} from 'exponent';
import { black } from 'learnapollo/constants/Colors.js'

export class BaseText extends React.Component {
  props: PropsType;
  root: any;

  setNativeProps(nativeProps: any) {
    this.root.setNativeProps(nativeProps);
  }

  getFontType = () => {
    if (!this.props.fontFace) return 'source-sans';
    return this.props.fontFace;
  }

  render() {
    return (
      <RNText 
        {...this.props} 
        style={[
          styles.defaultStyle, 
          this.props.style, 
          Font.style(this.getFontType())
        ]} 
      />
    );
  }
}

type StyleType = *;
type PropsType = {
    fontFace: 'lato-bold' | 'source-sans',
    style?: StyleType,
    numberOfLines?: number,
    onLayout?: () => any,
    onPress?: () => any,
    suppressHighlighting?: bool,
    testID?: string,
    allowFontScaling?: bool,
    children?: string,
};

const styles = StyleSheet.create({
  defaultStyle: {
    color: black
  }
})


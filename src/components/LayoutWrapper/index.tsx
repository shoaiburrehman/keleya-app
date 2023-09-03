import React from 'react';
import { Image, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

const LayoutWrapper = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.background} style={[styles.backgroundStyle, props?.backgroundStyle]} />
      {props.children}
    </View>
  );
};

export default LayoutWrapper;

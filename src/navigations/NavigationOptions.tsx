import React from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import {icons} from '../assets/index';
import {vh, vw} from '../themes/units';
import {Colors} from '../themes/Colors';

const navigationOptions = (navProps: any) => {
  return {
    headerTitle: () => getTitle(navProps),
    headerLeft: () => renderHeaderLeft(navProps),
    headerBackVisible: false,
    headerTitleAlign: 'center',
    headerLeftContainerStyle: {paddingLeft: 4 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw},
    headerStyle: getHeaderStyle(navProps),
  };
};

const getHeaderStyle = (props: any) => {
  return {
    shadowColor: 'transparent',
    backgroundColor: 'transparent',
    height: 14 * vh,
    maxHeight: 20 * vh,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  };
};

const getTitle = (props: any) => {
  const categoryName: string = props?.route?.params?.item?.CategoryName;
  return (
    <View style={styles.logoView}>
      <Text style={styles.titleTextStyle}>
        {categoryName ? categoryName : props?.route?.name}
      </Text>
    </View>
  );
};

const renderHeaderLeft = (props: any) => {
  return (
    <TouchableOpacity
      onPress={() => props?.navigation.goBack()}
      style={styles.textButton}>
      <Image source={icons.leftArrow} style={styles.leftIconStyle} />
    </TouchableOpacity>
  );
};

export default navigationOptions;

import React, { useState, useRef } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ImageBackground, StatusBar} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from './styles';
import { screenOptions } from './data';
import { vh, vw } from '../../themes/units';
import { images } from '../../assets';
import GeneralButton from '../../components/GeneralButton';
import LinkButton from '../../components/LinkButton';
import LayoutWrapper from '../../components/LayoutWrapper';


const SignIn = () => {
    return(
        <LayoutWrapper background={images.authBackgroundImg}>
            <View style={styles.paginationContainer}>
                <GeneralButton
                    text={'Get Started'}
                    style={[styles.btn]}
                    textStyle={styles.btnText}
                />
                <LinkButton
                    text="Or login"
                    style={styles.loginBtn}
                    textStyle={styles.loginText} 
                />
            </View>
        </LayoutWrapper>
    )
}

export default SignIn;

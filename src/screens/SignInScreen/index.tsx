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
import InputField from '../../components/InputField';


const SignIn = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return(
        <LayoutWrapper background={images.authBackgroundImg}>
            <View style={styles.inputContainer}>
                <Text style={styles.welcomeBack}>Welcome back!</Text>
                <InputField
                    placeholder={`example@gmail.com`}
                    keyboardType={'email-address'}
                    value={email}
                    onChangeText={setEmail}
                />
                <InputField
                    placeholder={`Enter a password`}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View style={styles.bottomContainer}>
                <GeneralButton
                    text={'Log in'}
                    style={[styles.btn]}
                    textStyle={styles.btnText}
                />
            </View>
        </LayoutWrapper>
    )
}

export default SignIn;

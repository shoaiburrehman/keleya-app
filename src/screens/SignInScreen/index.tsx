import React, { useState, useRef, useEffect } from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { images } from '../../assets';
import GeneralButton from '../../components/GeneralButton';
import LayoutWrapper from '../../components/LayoutWrapper';
import InputField from '../../components/InputField';
import NavigationRoutes from '../../navigations/NavigationRoutes';
import { Colors } from '../../themes';
import { isBlank, validateEmail } from '../../utils/helpers';


const SignIn = (props) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [enableBtn, setEnableBtn] = useState<boolean>(false)

    const handleSignIn = () => {
        if(isBlank(email) || isBlank(password) || !validateEmail(email)) setEnableBtn(false)
        else setEnableBtn(true);
    }

    useEffect(() => {
        handleSignIn();
    }, [email, password])

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
                <Text style={styles.forgottenText}>Have you forgotten your password?</Text>
                <GeneralButton
                    text={'Log in'}
                    disabled={!enableBtn}
                    style={[styles.btn, enableBtn && {backgroundColor: Colors.APP_PRIMARY_COLOR}]}
                    textStyle={styles.btnText}
                    onPress={() => props?.navigation.navigate(NavigationRoutes.SUCCESS)}
                />
            </View>
        </LayoutWrapper>
    )
}

export default SignIn;

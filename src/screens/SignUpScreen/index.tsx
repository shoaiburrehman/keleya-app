import React, { useState } from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { images } from '../../assets';
import GeneralButton from '../../components/GeneralButton';
import LayoutWrapper from '../../components/LayoutWrapper';
import InputField from '../../components/InputField';
import Checkbox from '../../components/CheckboxButton';
import NavigationRoutes from '../../navigations/NavigationRoutes';


const SignUp = (props) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPrivacyEnabled, setIsPrivacyEnabled] = useState(false);
    const [isTermsEnabled, setIsTermsEnabled] = useState(false);

    const togglePrivacySwitch = () => setIsPrivacyEnabled(previousState => !previousState);

    const toggleTermsSwitch = () => setIsTermsEnabled(previousState => !previousState);

    return(
        <LayoutWrapper background={images.authBackgroundImg}>
            <View style={styles.inputContainer}>
                <Text style={styles.welcomeBack}>Add your details beloow to set up your account</Text>
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
                <Checkbox
                    checkboxText="I've read the privacy policy"
                    handleCheck={togglePrivacySwitch}
                    value={isPrivacyEnabled}
                />
                <Checkbox
                    checkboxText="I accept the terms & conditions and keleya's advice"
                    handleCheck={toggleTermsSwitch}
                    value={isTermsEnabled}
                />

            </View>
            <View style={styles.bottomContainer}>
                <GeneralButton
                    text={'Create account'}
                    style={[styles.btn]}
                    textStyle={styles.btnText}
                    onPress={() => props?.navigation.navigate(NavigationRoutes.NAME)}
                />
            </View>
        </LayoutWrapper>
    )
}

export default SignUp;

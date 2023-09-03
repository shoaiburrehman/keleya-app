import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { images } from '../../assets';
import GeneralButton from '../../components/GeneralButton';
import LayoutWrapper from '../../components/LayoutWrapper';
import InputField from '../../components/InputField';
import { Colors, Fonts } from '../../themes';
import NavigationRoutes from '../../navigations/NavigationRoutes';
import { isBlank } from '../../utils/helpers';


const Name = (props: any) => {
    const [name, setName] = useState<string>('');
    const [enableBtn, setEnableBtn] = useState<boolean>(false)

    const handleSignIn = () => {
        if(isBlank(name)) setEnableBtn(false)
        else setEnableBtn(true);
    }

    useEffect(() => {
        handleSignIn();
    }, [name])

    return(
        <LayoutWrapper background={images.authBackgroundImg}>
            <View style={styles.inputContainer}>
                <Text style={styles.headerText}>It's great that you're here! First thing first, what should we call you?</Text>
                <InputField
                    placeholder={`Your Name`}
                    value={name}
                    textInputStyle={styles.textInputStyle}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.bottomContainer}>
                <GeneralButton
                    text={'Continue'}
                    disabled={!enableBtn}
                    style={[styles.btn, enableBtn && {backgroundColor: Colors.APP_PRIMARY_COLOR}]}
                    textStyle={styles.btnText}
                    onPress={() => props?.navigation.navigate(NavigationRoutes.DATE)}
                />
            </View>
        </LayoutWrapper>
    )
}

export default Name;

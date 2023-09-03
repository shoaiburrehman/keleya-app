import React, { useState } from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { images } from '../../assets';
import GeneralButton from '../../components/GeneralButton';
import LayoutWrapper from '../../components/LayoutWrapper';
import InputField from '../../components/InputField';
import { Fonts } from '../../themes';


const Name = () => {
    const [name, setName] = useState<string>('');

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
                    style={[styles.btn]}
                    textStyle={styles.btnText}
                />
            </View>
        </LayoutWrapper>
    )
}

export default Name;

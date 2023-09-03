import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import { icons, images } from '../../assets';
import GeneralButton from '../../components/GeneralButton';
import LinkButton from '../../components/LinkButton';
import LinearGradient from 'react-native-linear-gradient';


const Success = (props: any) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={images.notifBgImg} style={styles.carouselImage} />
                <View style={styles.logoContainer}>
                    <Image source={icons.bell} style={styles.bellImg} />
                    <Text style={styles.logoText}>For a fit and relaxed pregnancy.</Text>
                </View>
            </View>
            <LinearGradient colors={['transparent', 'white']} style={styles.linearContainer}>
                <View style={styles.bottomContainer}>
                    <LinkButton
                        text="Skip"
                        style={styles.notifBtn}
                        textStyle={styles.notifText}
                        onPress={() => props?.navigation?.goBack()}
                    />
                    <GeneralButton
                        text={'Allow notifications'}
                        style={[styles.btn]}
                        textStyle={styles.btnText}
                    />
                </View>
          </LinearGradient>
            {/* <View style={styles.bottomContainer}>
            </View> */}
        </View>
    )
}

export default Success;

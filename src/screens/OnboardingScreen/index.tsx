import React, { useState, useRef } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ImageBackground, StatusBar} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from './styles';
import { screenOptions } from './data';
import { vh, vw } from '../../themes/units';
import { images } from '../../assets';
import GeneralButton from '../../components/GeneralButton';
import LinkButton from '../../components/LinkButton';


const Onboarding = () => {
    const carouselRef = useRef();
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const renderCarouselItem = ({ item }: any) => {
        return (
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.carouselImage} />
                <View style={styles.logoContainer}>
                    <Image source={images.logo} style={styles.logoImg} />
                    <Text style={styles.logoText}>For a fit and relaxed pregnancy.</Text>
                </View>
            </View>
        )
    };

    const pagination = () => {
        return (
            <Pagination
                dotsLength={screenOptions.length}
                activeDotIndex={currentIndex}
                containerStyle={{backgroundColor: 'transparent'}}
                dotStyle={styles.dotStyle}
                inactiveDotStyle={styles.inactiveDotStyle}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
            />
        );
    };

    return(
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={screenOptions}
                renderItem={renderCarouselItem}
                sliderWidth={vw * 100}
                itemWidth={vw * 100}
                sliderHeight={vh * 100}
                itemHeight={vh * 100}
                scrollEnabled={true}
                onSnapToItem={index => setCurrentIndex(index)}
            />
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
                {pagination()}
            </View>
        </View>
    )
}

export default Onboarding;

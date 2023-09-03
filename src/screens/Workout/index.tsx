import React, { useState } from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import WheelPicker from 'react-native-wheely';
import styles from './styles';
import { images } from '../../assets';
import GeneralButton from '../../components/GeneralButton';
import NavigationRoutes from '../../navigations/NavigationRoutes';

const ListingData = [
    'Once a week', 
    '2 times a week', 
    '3 times a week', 
    '4 times a week', 
    '5 times a week', 
    '6 times a week', 
    '7 times a week',
    '8 times a week', 
    '9 times a week'
]

const Workout = (props: any) => {
    const [selectedIndex, setSelectedIndex] = useState(2);

    return(
        <ScrollView nestedScrollEnabled={true} style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
            <Image source={images.workoutBgImg} style={[styles.backgroundStyle]} />
            <View style={styles.headerView}>
                <Text style={styles.headerText}>How many times a week do you want to be active?</Text>
            </View>
            <View style={styles.inputContainer}>
                <WheelPicker
                    selectedIndex={selectedIndex}
                    options={ListingData}
                    flatListProps={{ nestedScrollEnabled: true }}
                    onChange={(index) => setSelectedIndex(index)}
                />
            </View>
            <View style={styles.bottomContainer}>
                <GeneralButton
                    text={'Continue'}
                    style={[styles.btn]}
                    textStyle={styles.btnText}
                    onPress={() => props?.navigation.navigate(NavigationRoutes.SUCCESS)}
                />
            </View>
        </ScrollView>
    )
}

export default Workout;

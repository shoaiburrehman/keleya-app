import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import styles from './styles';
import { images } from '../../assets';
import GeneralButton from '../../components/GeneralButton';
import LayoutWrapper from '../../components/LayoutWrapper';


const DateScreen = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState<boolean>(false);

    return(
        <LayoutWrapper background={images.dueDateBackgroundImg}>
            <View style={styles.inputContainer}>
                <Text style={styles.headerText}>When is your baby due, Sam?</Text>
                <TouchableOpacity style={styles.dateView} onPress={() => setOpen(!open)}>
                    <Text style={styles.dateText}>{dayjs(date).format('MMM DD, YYYY')}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <GeneralButton
                    text={'Continue'}
                    style={[styles.btn]}
                    textStyle={styles.btnText}
                />
            </View>
            <DatePicker
                modal
                mode={'date'}
                open={open}
                date={date}
                onConfirm={date => {
                setOpen(false);
                setDate(date);
                }}
                onCancel={() => {
                setOpen(false);
                }}
            />
        </LayoutWrapper>
    )
}

export default DateScreen;

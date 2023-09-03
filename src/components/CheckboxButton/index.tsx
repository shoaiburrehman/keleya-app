import React from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";
import styles from "./styles"

type Props = {
    switchContainer: {}
    checkboxText: string
    handleCheck: () => void;
    value?: boolean
};

const Checkbox: React.FC<Props> = (props: Props) => {
    return(
        <View style={[styles.switchContainer, props?.switchContainer]}>
            <TouchableOpacity style={styles.touchableCheck} onPress={props?.handleCheck}>
                {props?.value && <View style={styles.innerCheckbox} /> }
            </TouchableOpacity>
            <Text style={styles.switchText}>
                {props?.checkboxText}
            </Text>
        </View>    
    )
}
export default Checkbox;

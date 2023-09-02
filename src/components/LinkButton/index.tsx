import React, { Component } from "react";
import {
    Text,
    TouchableOpacity
} from "react-native";

type Props = {
    text: string
    style: any
    textStyle: any 
    onPress?: () => void;
};

const LinkButton: React.FC<Props> = (props: Props) => {
    return(
        <TouchableOpacity style={props.style} onPress={props.onPress}>
            <Text style={props.textStyle}>{props.text}</Text>
        </TouchableOpacity>
    )
}
export default LinkButton;

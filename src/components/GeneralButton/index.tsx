import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type Props = {
  style: {};
  disabled?: boolean | undefined;
  onPress?: () => void;
  textStyle: any;
  text: string;
};

const GeneralButton: React.FC<Props> = (props: Props) => {
  return (
    <TouchableOpacity
      style={props.style}
      disabled={props?.disabled || false}
      onPress={props.onPress}
      activeOpacity={0.8}>
      <Text style={props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default GeneralButton;

import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, KeyboardType} from 'react-native';
import styles from './styles';
import {vw} from '../../themes/units';
import TextInputHOC from '../TextInputHOC';
import {icons} from '../../assets';
import {Colors} from '../../themes/Colors';

interface Props {
  style: {};
  onPress?: () => void;
  secureTextEntry: boolean;
  notRequired: boolean;
  title: string;
  keyboardType: KeyboardType;
  titleTextStyle: {};
  textInputContainer: {};
  textInputStyle: {};
  icon: any;
  onFieldTypePress?: () => void;
  placeholder: string;
}

const options = [
  {
    label: 'Fields',
    value: null,
  },
  {
    label: 'Text',
    value: 'TEXT',
  },
  {
    label: 'Date',
    value: 'DATE',
  },
  {
    label: 'Checkbox',
    value: 'CHECKBOX',
  },
  {
    label: 'Number',
    value: 'NUMBER',
  },
];

const InputField = React.forwardRef((props: Props, ref: Ref) => {
  const [isShow, setIsShow] = useState(false);

  const handlePassword = () => {
    setIsShow(!isShow);
  };

  const getInputWidth = () => {
    let width = vw * 72;
    if (props.secureTextEntry) {
      width -= vw * 10;
    }
    return width;
  };

  return (
    <View style={[styles.container, props?.style]}>
        <View style={[styles.textInputContainer, props?.textInputContainer]}>
          <TextInputHOC
            ref={ref}
            {...props}
            secureTextEntry={props.secureTextEntry && !isShow}
            style={[
              styles.textInput,
              {width: getInputWidth()},
              props?.textInputStyle,
            ]}
          />
          {props.secureTextEntry && (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={handlePassword}>
              <Image
                source={isShow ? icons.visible : icons.hidden}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
    </View>
  );
});

export default InputField;

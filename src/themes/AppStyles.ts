import Fonts from './Fonts';
import {Colors} from './Colors';
import {Platform} from 'react-native';
import {vh} from './units';

const appMainContainer = {
  backgroundColor: Colors.WHITE,
  flexGrow: 1,
};

const centerAlign = {
  justifyContent: 'center',
  alignItems: 'center',
};

const inputControl = {
  flex: 1,
  height: Platform.OS === 'ios' ? vh * 10 : vh * 6,
  ...Fonts.Medium(16, Colors.WARM_GREY),
};

export {appMainContainer, inputControl, centerAlign};

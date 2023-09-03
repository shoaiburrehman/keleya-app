import {StyleSheet} from 'react-native';
import { vh, vw } from '../../themes/units';
import { Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: vh * 1.5,
    alignSelf: 'flex-start'
  },
  touchableCheck: {
    borderColor: Colors.APP_PRIMARY_COLOR,
    borderWidth:1,
    width: vw * 5,
    height: vw * 5,
    borderRadius: vw,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: vw * 3,
    marginTop: 2
  },
  innerCheckbox: {
    backgroundColor: Colors.APP_PRIMARY_COLOR,
    width: vw * 3,
    height: vw * 3,
    borderRadius: 2,
  },
  switchText: {

    ...Fonts.Regular(16)
  }
});

export default styles;

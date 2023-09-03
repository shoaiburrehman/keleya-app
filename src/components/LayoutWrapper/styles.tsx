import {StyleSheet} from 'react-native';
import { vh, vw } from '../../themes/units';
import { Colors } from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE
  },
  backgroundStyle: {
    height: vh * 50,
    width: vw * 100
  }
});

export default styles;

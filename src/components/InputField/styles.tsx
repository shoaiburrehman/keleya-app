import {StyleSheet} from 'react-native';
import {vh, vw} from '../../themes/units';
import {Fonts} from '../../themes';
import {APP_SHADOW, Colors} from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: vh * 1.5,
  },
  titleText: {
    ...Fonts.Regular(14, Colors.BLACK),
    // fontSize: vw * 4,
    marginLeft: vw * 4,
    marginBottom: vh * 1,
  },
  flex: {
    flexDirection: 'row',
  },
  textInputContainer: {
    width: '100%',
    marginTop: vh,
    flexDirection: 'row',
    borderRadius: vw * 2,
    paddingHorizontal: vw * 4,
    borderBottomColor: Colors.BLACK,
    borderBottomWidth: 1,
  },

  iconContainer: {
    marginTop: vh,
    width: vw * 20,
    marginLeft: vw * 4,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  icon: {
    height: vh * 4,
    width: vw * 4,
  },
  fieldTypeView: {
    marginTop: vh * 2,
    paddingHorizontal: vw,
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  textInput: {
    ...Fonts.Regular(12, Colors.GREYISH_BROWN),
    marginTop: vw,
  },
  pickerContainer: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    borderColor: 'transparent',
    width: vw * 40,
  },
  picker: {
    width: '100%',
    color: Colors.BLACK,
  },
});

export default styles;

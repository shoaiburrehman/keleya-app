import {StyleSheet} from 'react-native';
import { vh, vw } from '../../themes/units';
import { Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: vw * 10,
        alignItems: 'center',
    },
    welcomeBack: {
        ...Fonts.Medium(18)
    },
    btn: {
        marginHorizontal: vw * 5,
        width: vw * 75,
        height: vh * 8,
        borderRadius: vw * 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Colors.WARM_GREY,
    },
    btnText: {
        ...Fonts.Regular(16, Colors.Colors.WHITE),
        textAlign: 'center',
    },
    loginBtn: {
        marginTop: vh * 2,
    },
    loginText: {
        ...Fonts.Bold(16),
    },
    bottomContainer: {
        marginTop: vh * 10,
        // position: 'absolute',
        // bottom: vh * 4,
        alignItems: 'center',
    },
})

export default styles;
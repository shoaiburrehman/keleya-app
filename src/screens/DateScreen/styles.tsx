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
        marginTop: vh * 3,
        marginHorizontal: vw * 10,
        alignItems: 'center',
    },
    headerText: {
        ...Fonts.Medium(18),
        textAlign: 'center'
    },
    textInputStyle: {
        textAlign: 'center', 
        ...Fonts.Regular(14),
    },
    forgottenText: {
        marginBottom: vh * 3
    },
    dateView: {
        marginTop: vh * 4,
        borderRadius: vw * 1.5,
        paddingVertical: vh,
        paddingHorizontal: vw * 3.5,
        backgroundColor: Colors.Colors.LIGHT_GREY
    },
    dateText: {
        ...Fonts.Regular(14, Colors.Colors.BLUE)
    },
    btn: {
        marginHorizontal: vw * 5,
        width: vw * 75,
        height: vh * 8,
        borderRadius: vw * 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Colors.PALE_TEAL,
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
        marginTop: vh * 12,
        marginBottom: vh * 5,
        alignItems: 'center',
    },
})

export default styles;
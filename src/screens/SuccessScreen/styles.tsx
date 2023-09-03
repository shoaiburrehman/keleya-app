import {StyleSheet} from 'react-native';
import { vh, vw } from '../../themes/units';
import { Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Colors.WHITE
    },
    imageContainer: {
        flex: 1,
        marginTop: vh * 14,
    },
    carouselImage: {
        height: vh * 100,
        width: vw * 100,
    },
    dotStyle: {
        width: vw * 2.5,
        height: vw * 2.5,
        borderRadius: (vw * 2.5) / 2,
        backgroundColor: Colors.Colors.PALE_TEAL,
    },
    inactiveDotStyle: {
        width: vw * 2.5,
        height: vw * 2.5,
        borderRadius: (vw * 2.5) / 2,
        backgroundColor: Colors.Colors.LIGHT_TEAL,
    },
    logoContainer: {
        position: 'absolute',
        top: vh * 5,
        alignItems: 'center',
        alignSelf: 'center',
    },
    bellImg: {
        resizeMode: 'contain',
        width: vw * 12,
        height: vw * 12
    },
    logoText: {
        ...Fonts.Regular(16),
        marginTop: vh * 3,
        textAlign: 'center',
        width: '80%'
    },
    btn: {
        marginHorizontal: vw * 5,
        width: vw * 75,
        height: vh * 7.5,
        borderRadius: vw * 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.APP_PRIMARY_COLOR,
    },
    btnText: {
        ...Fonts.Regular(15, Colors.Colors.WHITE),
        textAlign: 'center',
    },
    notifBtn: {
        marginBottom: vh * 3,
    },
    notifText: {
        ...Fonts.Bold(16),
    },
    linearContainer: {
        width: vw * 100,
        position: 'absolute',
        bottom: 0
    },
    bottomContainer: {
        alignItems: 'center',
        marginBottom: vh * 5,
    },
})

export default styles;
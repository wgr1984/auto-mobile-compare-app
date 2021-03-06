/**
 * Created by wolfgangreithmeier on 30/10/2016.
 */
const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;

module.exports = {
    navBarContainer: {
        backgroundColor: '#0097A7',
    },
    statusBar: {
        height: STATUS_BAR_HEIGHT,
    },
    navBar: {
        height: NAV_BAR_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    customTitle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 7,
        alignItems: 'center',
    },
    navBarButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    navBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBarButtonText: {
        fontSize: 17,
        letterSpacing: 0.5,
        marginTop: 10
    },
    navBarTitleContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBarTitleText: {
        fontSize: 17,
        letterSpacing: 0.5,
        color: '#fff',
        fontWeight: '500',
    },
    navBarButtonContainer : {
        flexDirection : 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    navBarButtonIcon : {
        width: 40,
        height: 40,
        resizeMode : 'contain'
    }
};

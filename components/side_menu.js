/**
 * Created by wolfgangreithmeier on 29/10/2016.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {actions as routerActions} from 'react-native-redux-router'
import Button from 'react-native-button'
import {NavBarBase} from './nav_bar'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIon from 'react-native-vector-icons/Ionicons'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions/actions'
import nav_styles from './nav_bar_button_styles'

class SideMenuComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.props.actions.closeDrawer}>Back</Button>
            </View>
        )
    }
}

function mapState(state) {
    return {
        // isDrawerShown : state.appReducer.isDrawerShown
    }
}

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        routerActions: bindActionCreators({...routerActions}, dispatch)
    }
}

export default SideMenuConnector = connect(mapState, mapDispatch)(SideMenuComponent)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: nav_styles.navBarContainer.backgroundColor
    }
});
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

    static get defaultProps() {
        return {
            items: [
                {title: "item0", callback:()=>alert("itme 0 pressed")},
                {title: "item1", callback:()=>alert("itme 1 pressed")},
                {title: "item2", callback:()=>alert("itme 2 pressed")}
            ]
        }
    }

    render() {
        let self = this
        return (
            <View style={styles.container}>
                {self.renderItems()}
            </View>
        )
    }

    renderItems() {
        return this.props.items.map((item, index)=>{
            return <Button style={styles.menuItem} key={index} onPress={item.callback}>{item.title}</Button>
        })
    }

    select(pos) {
        switch (pos) {
            case 0:
                alert ("test")
                break
        }
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
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: nav_styles.navBarContainer.backgroundColor
    },
    menuItem: {
        color: 'white',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center'
    }
});
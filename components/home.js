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
import {Actions as RouterActions} from 'react-native-redux-router'
import Button from 'react-native-button'
import {NavBarBase} from './nav_bar'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIon from 'react-native-vector-icons/Ionicons'
import Drawer from 'react-native-drawer'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions/actions'
import SideMenuComponentConnector from './side_menu'

class HomeComponent extends Component {
    render() {
        let items = [
            {title:"Car List", callback: ()=>{this.props.routerActions.index()}}
        ]

        return (
        <Drawer
            ref={(ref) => this._drawer = ref}
            openDrawerOffset={(viewport) => viewport.width * 0.25}
            onClose={this.props.actions.closeDrawer}
            onOpen={this.props.actions.openDrawer}
            tapToClose={true}
            type="overlay"
            panOpenMask={0.3}
            open={this.props.isDrawerShown}
            content={<SideMenuComponentConnector items={items}/>}
        >
            <View style={styles.container}>

                <Text>Home</Text>
                <Button>Back</Button>
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.props.actions.openDrawer}>
                    Login with Facebook
                </Icon.Button>
            </View>
        </Drawer>
        )
    }
}

function mapState(state) {
    return {
        isDrawerShown : state.appReducer.isDrawerShown
    }
}

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        routerActions: bindActionCreators({...RouterActions}, dispatch)
    }
}

export default HomeConnector = connect(mapState, mapDispatch)(HomeComponent)

class HomeBar extends Component {
    constructor (props) {
        super (props)
        this.state = {
            backIcon: null
        }
    }
    componentWillMount() {
        IconIon.getImageSource('md-settings', 40, "white").then((source) =>
        {
            return this.setState({ backIcon: source})
        });
    }
    render() {
        if (!this.state.backIcon) {
            return false
        }
        var self = this
        return <NavBarBase {...this.props} leftButton={{
            title: "",
            handler: this.props.actions.toggleDrawer,
            icon: self.state.backIcon
        }}/>
    }
}

exports.HomeBarContainer = connect(mapState, mapDispatch)(HomeBar)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
})
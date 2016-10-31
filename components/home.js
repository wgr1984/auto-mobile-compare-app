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
import {Actions} from 'react-native-redux-router'
import Button from 'react-native-button'
import {NavBarBase} from './nav_bar'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIon from 'react-native-vector-icons/Ionicons'
import Drawer from 'react-native-drawer'

export default class HomeComponent extends Component {
    openControlPanel = () => {
        this._drawer.open()
    };

    render() {
        return (
        <Drawer
            ref={(ref) => this._drawer = ref}
            content={<View />}
        >
            <View style={styles.container}>

                <Text>Home</Text>
                <Button>Back</Button>
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.openControlPanel.bind(this)}>
                    Login with Facebook
                </Icon.Button>
            </View>
        </Drawer>
        )
    }
}

export class HomeBar extends Component {
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
        var Actions = this.props.routes;
        var self = this
        return <NavBarBase {...this.props} leftButton={{
            title: "",
            handler: () => alert('hello!'),
            icon: self.state.backIcon
        }}/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
});
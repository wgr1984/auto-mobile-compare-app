/**
 * Created by wolfgangreithmeier on 30/10/2016.
 */

import NavigationBar from './nav_bar_icon'
import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {navBarContainer as navBarStyle} from './nav_bar_button_styles'
import {Router, Route, Animations, Schema} from 'react-native-redux-router'

export class NavBarBase extends Component {
    onPrev(){
        var Actions = this.props.routes;
        if (this.props.onPrev){
            this.props.onPrev();
            return;
        }
        if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
            Actions.pop();
        }
    }
    render() {
        var Actions = this.props.routes;
        console.log("Props : " + this.props);
        return (<NavigationBar style={navBarStyle.navBarContainer}
                              titleColor='white'
                              buttonsColor='white'
                              statusBar= {{style:'light-content', hidden: false}}
                              title= {{title:this.props.title}}
                              prevTitle={this.props.initial ? " " : null}
                              leftButton = {this.props.leftButton ? this.props.leftButton : {title:''}}
                              rightButton = {this.props.rightButton ? this.props.rightButton : {title:''}}



        />)
    }
}
export class NavBar extends React.Component {
    render() {
        var Actions = this.props.routes;
        return <NavBarBase customNext={<View/>} {...this.props} leftButton={{title:'Left', handler:this.props.onPrev || Actions.pop}}/>
    }
}


export class NavBarModal extends React.Component {
    render() {
        var Actions = this.props.routes;
        return <NavBarBase customPrev={<View/>} nextTitle="Close" {...this.props} rightButton={{title:'Close', handler:this.props.onNext || Actions.pop}}/>
    }
}
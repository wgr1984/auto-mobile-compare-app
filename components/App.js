/**
 * Created by wolfgangreithmeier on 31/10/2016.
 */

import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native'
import HomeComponent, {HomeBar} from './home'
import {NavBar, NavBarModal} from './nav_bar'
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'

const loggerMiddleWare = createLogger()

const createStoreWithMiddleware = applyMiddleware(loggerMiddleWare)(createStore)
const reducer = combineReducers({routerReducer})
let store = createStoreWithMiddleware(reducer)

export default class AutoMobileCompareApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router initial="index">
                    <Route name="index" component={HomeComponent} navBar={HomeBar} title="Auto Compare App"/>
                </Router>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
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
import HomeContainer, {HomeBarContainer} from './home'
import {NavBar, NavBarModal} from './nav_bar'
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import appReducer from './reducers/reducer'

const loggerMiddleWare = createLogger()

const createStoreWithMiddleware = applyMiddleware(loggerMiddleWare, thunk)(createStore)
const reducer = combineReducers({routerReducer, appReducer})
let store = createStoreWithMiddleware(reducer)

export default class AutoMobileCompareApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router initial="index">
                    <Route name="index" component={HomeContainer} navBar={HomeBarContainer} title="Auto Compare App"/>
                </Router>
            </Provider>
        );
    }
}
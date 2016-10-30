/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomeComponent, {HomeBar} from './components/home'
import {NavBar, NavBarModal} from './components/nav_bar'
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

const loggerMiddleWare = createLogger();

const createStoreWithMiddleware = applyMiddleware(loggerMiddleWare)(createStore);
const reducer = combineReducers({routerReducer});
let store = createStoreWithMiddleware(reducer);

class AutoMobileCompareApp extends Component {
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

AppRegistry.registerComponent('AutoMobileCompareApp', () => AutoMobileCompareApp);

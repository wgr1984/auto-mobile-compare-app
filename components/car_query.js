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
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIon from 'react-native-vector-icons/Ionicons'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions/actions'

class CarQueryComponent extends Component {
    render() {
        let self = this
        return (
            <View style={styles.container}>
                <Text>Used/New</Text>
                <Text>Brand</Text>
                <Text>Model</Text>
                <Text>Max Price</Text>
                <Text>Max Mileage</Text>
                <Text>PLZ</Text>
                <Text>Search Radius</Text>
            </View>
        )
    }
}

function mapState(state) {
    return {
        //isDrawerShown : state.appReducer.isDrawerShown
    }
}

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
        routerActions: bindActionCreators({...RouterActions}, dispatch)
    }
}

export default CarQueryConnector = connect(mapState, mapDispatch)(CarQueryComponent)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
})
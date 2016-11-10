/**
 * Created by wolfgangreithmeier on 31/10/2016.
 */

import { handleActions } from 'redux-actions'
import { OPEN_DRAWER, CLOSE_DRAWER, TOGGLE_DRAWER } from '../constants/constants'

const initialState = {
    isDrawerShown : false
}

//you can do better here, I was just showing that you need to make a new copy
//of state. It is ok to deep copy of state. It will prevent unseen bugs in the future
//for better performance you can use immutableJS

//handleActions is a helper function to instead of using a switch case statement,
//we just use the regular map with function state attach to it.

export default handleActions({
    [OPEN_DRAWER]: (state, action) => {
        return {
            isDrawerShown : true
        }
    },
    [CLOSE_DRAWER]: (state, action) => {
        return {
            isDrawerShown : false
        }
    },
    [TOGGLE_DRAWER]: (state, action) => {
        return {
            isDrawerShown : !state.isDrawerShown
        }
    }
}, initialState)

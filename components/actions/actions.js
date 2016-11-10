/**
 * Created by wolfgangreithmeier on 31/10/2016.
 */
import { CLOSE_DRAWER, OPEN_DRAWER, TOGGLE_DRAWER } from '../constants/constants'

//each action should have the following signiture.
//  {
//     type: <type of action>,        type is required
//     payload: <the actual payload>  payload is optional. if you don't
//                                    have anything to send to reducer,
//                                    you don't need the payload. for example
//                                    newCounter action
//  }

export const openDrawer = () => {
    return {
        type: OPEN_DRAWER
    }
}

export const closeDrawer = () => {
    return {
        type: CLOSE_DRAWER
    }
}

export const toggleDrawer = () => {
    return {
        type: TOGGLE_DRAWER
    }
}
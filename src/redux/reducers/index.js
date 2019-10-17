import { combineReducers } from "redux";
import tabs from './tabs'
import modalWindows from './modalWindows'
import holidays from './holidays'
import bosses from './bosses'
import userDataTypes from './userDataTypes'
import profileData from './profileData'
export default combineReducers({
    tabs,
    modalWindows,
    holidays,
    bosses,
    userDataTypes,
    profileData
})
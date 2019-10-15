import { combineReducers } from "redux";
import profile from './profile'
import tabs from './tabs'
import modalWindows from './modalWindows'
import holidays from './holidays'
import bosses from './bosses'
import userDataTypes from './userDataTypes'
import profileData from './profileData'
export default combineReducers({
    profile,
    tabs,
    modalWindows,
    holidays,
    bosses,
    userDataTypes,
    profileData
})
import { combineReducers } from "redux";
import profile from './profile'
import tabs from './tabs'
import modalWindows from './modalWindows'
import holidays from './holidays'
import bosses from './bosses'
import user from './user'

export default combineReducers({
    profile,
    tabs,
    modalWindows,
    holidays,
    bosses,
    user
})
import { combineReducers } from "redux";
import filter from './filter'
import header from './header'
import profile from './profile'
import tabs from './tabs'
import modalWindows from './modalWindows'
import holidays from './holidays'
export default combineReducers({
    filter,
    header,
    profile,
    tabs,
    modalWindows,
    holidays
})
import { combineReducers } from "redux";
import filter from './filter'
import header from './header'
import profile from './profile'
import tabs from './tabs'
export default combineReducers({
    filter,
    header,
    profile,
    tabs
})
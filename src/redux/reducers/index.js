import { combineReducers } from "redux";
import filter from './filter'
import header from './header'


export default combineReducers({
    filter,
    header    
})
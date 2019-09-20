import thunk from 'redux-thunk'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux';

console.log(reducer)
export default createStore(reducer, applyMiddleware(thunk));
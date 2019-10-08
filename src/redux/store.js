import thunk from 'redux-thunk'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk))
);
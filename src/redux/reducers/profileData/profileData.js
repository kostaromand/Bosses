import {
    USER_INFO_SET
} from './types'

const initialState = {
    userInfo:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO_SET:
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state;
    }
}


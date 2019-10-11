import { USER_DATA_SET } from './types';

const initialState = {
    userData:{
        accessories:[]
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA_SET:
            return {
                userData: action.payload,
            }
        default:
            return state;
    }
}


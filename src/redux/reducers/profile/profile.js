import { PROFILE_DATA_SET } from './types';

const initialState = {
    profileData:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_DATA_SET:
            return {
                profileData: action.payload,
            }
        default:
            return state;
    }
}


import { PROFILE_DATA_GET } from './types';

const initialState = {
    isProfileDataLoaded:false,
    profileData:null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_DATA_GET:
            return {
                profileData: action.payload,
                isProfileDataLoaded:true
            }
        default:
            return state;
    }
}


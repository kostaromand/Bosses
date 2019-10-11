import { PROFILE_DATA_SET } from './types';
import { profileData } from '../../../data'

export const fetchProfileDataThunk = () => dispatch => {
    Promise.resolve(profileData).then(data => {
        dispatch(setProfileData(data))
    });
}

export const setProfileData = (data) => {
    return {
        type: PROFILE_DATA_SET,
        payload:data
    }
}

import { PROFILE_DATA_GET } from './types';
import { profileData } from '../../../data'

export const fetchProfileDataThunk = () => dispatch => {
    Promise.resolve(profileData).then(data => {
        dispatch(fetchProfileData(data))
    });
}

export const fetchProfileData = (data) => {
    return {
        type: PROFILE_DATA_GET,
        payload:data
    }
}

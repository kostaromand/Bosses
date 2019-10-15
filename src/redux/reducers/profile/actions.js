import { PROFILE_DATA_SET } from './types';
import { profileData } from '../../../data'
import { fetchUser, fetchStaffMembers } from '../../../services/API';

export const fetchProfileData = () => async dispatch => {
    try {
        console.log((await fetchUser(115)).data)
    }
    catch (error) {
        console.log(error)
    }
    Promise.resolve(profileData).then(data => {
        dispatch(setProfileData(data))
    });
}

export const setProfileData = (data) => {
    return {
        type: PROFILE_DATA_SET,
        payload: data
    }
}

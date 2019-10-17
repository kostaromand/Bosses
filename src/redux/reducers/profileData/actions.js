import {
    PROFILE_DATA_SET,
} from './types';
import { fetchUser } from '../../../services/API';
import { fetchBosses } from '../bosses/actions';

export const fetchProfileData = (id) => async dispatch => {
    try {
        await dispatch(fetchBosses());
        const user = await fetchUser(id);
        dispatch(setProfileData(user.data));
    }
    catch (error) {
        console.log(error)
    }
}

const setProfileData = (data) => {
    return { type: PROFILE_DATA_SET, payload: data }
}


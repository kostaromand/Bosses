import {
    STAFF_MEMBERS_SET,
} from './types';
import { fetchStaffMembers } from '../../../services/API';

export const fetchBosses = () => async dispatch => {
    try {
        const { data } = await fetchStaffMembers();
        dispatch(setStaffMembers(data));
    }
    catch (error) {
        console.log(error)
    }
}

export const setStaffMembers = (data) => {
    return { type: STAFF_MEMBERS_SET, payload: data }
}
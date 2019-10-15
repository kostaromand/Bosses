import {
    STAFF_MEMBERS_SET,
} from './types';
import { fetchStaffMembers } from '../../../services/API';
import { setVenues, setStaffTypes } from '../userDataTypes/actions'

export const fetchBosses = () => async dispatch => {
    try {
        const response = await fetchStaffMembers();
        const { staffMembers, staffTypes, venues } = response.data;
        dispatch(setStaffMembers(staffMembers));
        dispatch(setStaffTypes(staffTypes));
        dispatch(setVenues(venues));
    }
    catch (error) {
        console.log(error)
    }
}

const setStaffMembers = (staffMembers) => {
    return { type: STAFF_MEMBERS_SET, payload: staffMembers }
}
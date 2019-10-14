import {
    STAFF_MEMBERS_SET,
    STAFF_TYPES_SET,
    VENUES_SET
} from './types';
import { fetchRequest } from '../../../services/API';

export const fetchBossesThunk = () => async dispatch => {
    try {
        const response = await fetchRequest("https://purrweb-internship.herokuapp.com/api/v1/staff_members");
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

const setStaffTypes = (staffTypes) => {
    return { type: STAFF_TYPES_SET, payload: staffTypes }
}

const setVenues = (venues) => {
    return { type: VENUES_SET, payload: venues }
}
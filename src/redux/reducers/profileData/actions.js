import {
    USER_INFO_SET
} from './types';
import { setPayRates, setVenues, setStaffTypes } from '../userDataTypes/actions'
import { fetchUser } from '../../../services/API';

export const fetchProfileData = (id) => async dispatch => {
    try {
        const response = await fetchUser(id);
        const { payRates, staffMember } = response.data;
        dispatch(setUserInfo(staffMember));
        dispatch(setPayRates(payRates));
    }
    catch (error) {
        console.log(error)
    }
}

const setUserInfo = (userInfo) => {
    return { type: USER_INFO_SET, payload: userInfo }
}


export { setPayRates, setStaffTypes, setVenues, setUserInfo };
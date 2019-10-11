import { USER_DATA_SET } from './types';
import { userData } from '../../../data'

export const fetchUserDataThunk = () => dispatch => {
    Promise.resolve(userData).then(data => {
        dispatch(setUserData(data))   
    });
}

export const setUserData = (data) => {
    return {
        type: USER_DATA_SET,
        payload:data
    }
}

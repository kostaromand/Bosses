import {PROFILE_DATA_GET} from './types';

export const getData = (data) => {
    return {
        type: PROFILE_DATA_GET,
        data
    }
}
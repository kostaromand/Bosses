import {ACTIVE_TAB_CHANGE} from './types';

export const changeActiveTab = (id) => {
    return {
        type: ACTIVE_TAB_CHANGE,
        id
    }
}
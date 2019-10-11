import {
    BOSSES_SET,
    BOSSES_GET
} from './types';
import { bossData } from '../../../data'

export const fetchBossesThunk = () => dispatch => {
    dispatch(fetchBosses());
    Promise.resolve(bossData)
        .then(data => {
            dispatch(setBosses(data));
        })
}

export const fetchBosses = () => {
    return { type: BOSSES_GET }
}


export const setBosses = (bosses) => {
    return { type: BOSSES_SET, payload: bosses }
}
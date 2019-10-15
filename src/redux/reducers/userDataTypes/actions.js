import {
    PAY_RATES_SET,
    STAFF_TYPES_SET,
    VENUES_SET
} from './types';

const setPayRates = (payRates) => {
    return { type: PAY_RATES_SET, payload: payRates }
}

const setStaffTypes = (staffTypes) => {
    return { type: STAFF_TYPES_SET, payload: staffTypes }
}

const setVenues = (venues) => {
    return { type: VENUES_SET, payload: venues }
}

export { setPayRates, setStaffTypes, setVenues };
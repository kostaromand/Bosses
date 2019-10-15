import {
    PAY_RATES_SET,
    STAFF_TYPES_SET,
    VENUES_SET
} from './types'

const initialState = {
    payRates: [],
    staffTypes: [],
    venues: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PAY_RATES_SET:
            return {
                ...state,
                payRates: action.payload
            }
        case STAFF_TYPES_SET:
            return {
                ...state,
                staffTypes: action.payload
            }
        case VENUES_SET:
            return {
                ...state,
                venues: action.payload
            }
        default:
            return state;
    }
}


import {
    STAFF_MEMBERS_SET,
    PROFILE_DATA_SET
} from './types'

const initialState = {
    payRates: [],
    staffTypes: [],
    venues: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case STAFF_MEMBERS_SET:
            return {
                ...state,
                staffTypes: action.payload.staffTypes,
                venues:action.payload.venues
            }
        case PROFILE_DATA_SET:
            return {
                ...state,
                staffTypes: action.payload.staffTypes,
                venues:action.payload.venues,
                payRates: action.payload.payRates
            }
        default:
            return state;
    }
}


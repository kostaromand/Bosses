import {
    PROFILE_DATA_SET
} from './types'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_DATA_SET:
            return {
                ...action.payload.staffMember
            }
        default:
            return state;
    }
}


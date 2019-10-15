import {
    STAFF_MEMBERS_SET
} from './types'

const initialState = {
    staffMembers: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case STAFF_MEMBERS_SET:
            return {
                ...state,
                staffMembers: action.payload
            }
        default:
            return state;
    }
}


import {
    STAFF_MEMBERS_SET,
    STAFF_TYPES_SET,
    VENUES_SET
} from './types'

const initialState = {
    bossesInfo: {
        staffMembers: [],
        staffTypes: [],
        venues: []
    },
    bossesData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case STAFF_MEMBERS_SET:
            return {
                ...state,
                bossesInfo: { ...state.bossesInfo, staffMembers: action.payload }
            }
        case STAFF_TYPES_SET:
            return {
                ...state,
                bossesInfo: { ...state.bossesInfo, staffTypes: action.payload }
            }
        case VENUES_SET:
            return {
                ...state,
                bossesInfo: { ...state.bossesInfo, venues: action.payload }
            }
        default:
            return state;
    }
}


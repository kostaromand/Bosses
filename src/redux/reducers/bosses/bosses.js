import {
    BOSSES_SET
} from './types'

const initialState = {
    bossesData:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case BOSSES_SET:
            return {
                ...state,
                bossesData: action.payload
            }
        default:
            return state;
    }
}


import { FILTER_TOGGLE } from './types';

const initialState = {
    filterState: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FILTER_TOGGLE:
            
            return {
                filterState:!state.filterState
            }
        default:
            return state;
    }
}


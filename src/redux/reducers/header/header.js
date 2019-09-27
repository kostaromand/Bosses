import { SEARCH_TOGGLE } from './types';

const initialState = {
    searchState: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_TOGGLE:            
            return {
                searchState:!state.searchState
            }
        default:
            return state;
    }
}


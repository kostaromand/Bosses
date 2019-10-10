import {
    MODAL_CLOSE,
    MODAL_OPEN
} from './types';

const initialState = {
    openedModalName: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case MODAL_CLOSE:
            return {
                openedModalName: null
            }
        case MODAL_OPEN:
            return {
                openedModalName: action.payload
            }
        default:
            return state;
    }
}


import { EDIT_MODAL_TOGGLE } from './types';

const initialState = {
    editModalFlag:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EDIT_MODAL_TOGGLE:
            return {
                editModalFlag:!state.editModalFlag
            }
        default:
            return state;
    }
}


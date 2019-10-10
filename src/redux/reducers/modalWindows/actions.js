import {
    MODAL_CLOSE,
    MODAL_OPEN
} from './types';

export const openModal = (modalName) => {
    return { type: MODAL_OPEN, payload: modalName }
}

export const closeModal = () => {
    return {
        type: MODAL_CLOSE
    }
}
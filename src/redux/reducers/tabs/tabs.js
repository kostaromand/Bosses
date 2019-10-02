import { ACTIVE_TAB_CHANGE } from './types';

const tabInfo = [
    {
        id: 0,
        name: "Profile",
        role: "boss-button_role_profile",
        isSource: true
    },
    {
        id: 1,
        name: "Holidays",
        role: "boss-button_role_holidays"
    },
    {
        id: 2,
        name: "Owned Hours",
        role: "boss-button_role_timelog"
    },
    {
        id: 3,
        name: "Accessories",
        role: "boss-button_role_accessories"
    },
    {
        id: 4,
        name: "Shifts",
        role: "boss-button_role_shifts"
    },
    {
        id: 5,
        name: "Payments",
        role: "boss-button_role_payments"
    },
]
const initialState = {
    tabInfo,
    activeTab: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_TAB_CHANGE:
            return {
                ...state,
                activeTab: action.id
            }
        default:
            return state;
    }
}


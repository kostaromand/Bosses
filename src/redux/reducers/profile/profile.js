import { PROFILE_DATA_GET } from './types';

const mockedData = {
    avatar: "/images/avatar.jpg",
    fullName: "Trulla Collier",
    venue:"Some Venue",
    email: "trulla.collier@yahoo.com",
    phone: "+123 342 342",
    accessories: [
        {
            color: "#2ecc71",
            count: 3,
            tooltip: { header: "aad", text: "adsd" }
        },
        {
            type: "boss-indicator__icon_apron",
            color: "cd84f1",
            count: 3,
            tooltip: { header: "aad", text: "adsd" }
        },
        {
            color: "",
            count: 3,
            tooltip: { header: "aad", text: "adsd" }
        },
    ],
}

const initialState = {
    data: mockedData
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_DATA_GET:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}


import {
    HOLIDAY_IN_EDIT_SET,
    HOLIDAY_UPDATE,
    HOLIDAYS_SET,
    HOLIDAY_DELETE,
    HOLIDAY_ADD
} from './types'

const initialState = {
    holidaysData: [],
    holidayInEditId: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case HOLIDAYS_SET:
            return {
                ...state,
                holidaysData: action.holidays
            }
        case HOLIDAY_IN_EDIT_SET:
            return {
                ...state,
                holidayInEditId: action.payload
            }
        case HOLIDAY_UPDATE:
            const newHoliday = action.payload;
            return {
                ...state,
                holidaysData: state.holidaysData.map(holiday => (
                    holiday.id === newHoliday.id ? newHoliday : holiday
                ))
            }
        case HOLIDAY_DELETE:
            return {
                ...state,
                holidaysData: state.holidaysData.filter(holiday => holiday.id !== action.payload)
            }
        case HOLIDAY_ADD:
            return {
                ...state,
                holidaysData: [...state.holidaysData, action.payload]
            }
        default:
            return state;
    }
}


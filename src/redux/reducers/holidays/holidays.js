import {
    HOLIDAY_IN_EDIT_SET,
    HOLIDAY_UPDATE,
    HOLIDAYS_SET
} from './types'

const initialState = {
    holidaysData: [],
    holidayInEditId: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case HOLIDAYS_SET:
            return {
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
                holidays: state.holidays.map(holiday => (
                    holiday.id == newHoliday.id ? newHoliday : holiday
                ))
            }
        default:
            return state;
    }
}


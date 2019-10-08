import {
    HOLIDAYS_GET,
    HOLIDAYS_SET,
    HOLIDAY_IN_EDIT_SET,
    HOLIDAY_UPDATE
} from './types';
import { holidaysData } from '../../../data'

export const fetchHolidaysThunk = () => dispatch => {
    dispatch(fetchHolidays());
    Promise.resolve(holidaysData)
        .then(data => {
            dispatch(setHolidays(data));
        })
}


export const updateHoliday = holiday => {
    return { type: HOLIDAY_UPDATE, payload: holiday }
}

export const updateHolidayThunk = holiday => dispatch => {
    dispatch(updateHoliday(holiday));
    //send to backend
}

export const setHolidays = (holidays) => {
    return { type: HOLIDAYS_SET, holidays }
}
export const fetchHolidays = () => {
    return { type: HOLIDAYS_GET }
}

export const setHolidayInEdit = (id) => {
    return { type: HOLIDAY_IN_EDIT_SET, payload: id }
}
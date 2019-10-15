import {
    HOLIDAYS_GET,
    HOLIDAYS_SET,
    HOLIDAY_IN_EDIT_SET,
    HOLIDAY_UPDATE,
    HOLIDAY_DELETE,
    HOLIDAY_ADD
} from './types';
import { holidaysData } from '../../../data'

export const fetchHolidays = () => dispatch => {
    dispatch({ type: HOLIDAYS_GET });
    Promise.resolve(holidaysData)
        .then(data => {
            dispatch(setHolidays(data));
        })
}


export const updateHolidayInStore = holiday => {
    return { type: HOLIDAY_UPDATE, payload: holiday }
}

export const updateHoliday = holiday => dispatch => {
    dispatch(updateHolidayInStore(holiday));
    //send to backend
}

export const addHolidayToStore = holiday => {
    return { type: HOLIDAY_ADD, payload: holiday }
}

export const addHoliday = holiday => dispatch => {
    dispatch(addHolidayToStore(holiday));
    //send to backend
}


export const deleteHolidayInStore = id => {
    console.log(id)
    return { type: HOLIDAY_DELETE, payload: id }
}

export const deleteHoliday = id => dispatch => {
    dispatch(deleteHolidayInStore(id));
    //send to backend
}

export const setHolidays = (holidays) => {
    return { type: HOLIDAYS_SET, holidays }
}

export const setHolidayInEdit = (id) => {
    return { type: HOLIDAY_IN_EDIT_SET, payload: id }
}
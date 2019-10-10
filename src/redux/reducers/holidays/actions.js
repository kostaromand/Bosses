import {
    HOLIDAYS_GET,
    HOLIDAYS_SET,
    HOLIDAY_IN_EDIT_SET,
    HOLIDAY_UPDATE,
    HOLIDAY_DELETE,
    HOLIDAY_ADD
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

export const addHoliday = holiday => {
    return { type: HOLIDAY_ADD, payload: holiday }
}

export const addHolidayThunk = holiday => dispatch => {
    dispatch(addHoliday(holiday));
    //send to backend
}


export const deleteHoliday = id => {
    console.log(id)
    return { type: HOLIDAY_DELETE, payload: id }
}

export const  deleteHolidayThunk = id => dispatch => {
    dispatch(deleteHoliday(id));
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
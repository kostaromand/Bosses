export const getFilterState = (state) => {
    return state.filter.filterState;
}

export const getSearchToggleState = (state) => {
    return state.header.searchState;
}

export const getProfileData = (state) => {
    return state.profile.data;
}

export const getTabs = (state) => {
    return state.tabs.tabInfo
}

export const getActiveTab = (state) => {
    return state.tabs.activeTab
}

export const getEditModalFlag = (state) => {
    return state.modalWindows.editModalFlag;
}

export const getHolidays = (state) => {
    return state.holidays.holidaysData;
}

export const getHolidayInEdit = (state) => {
    const id =  state.holidays.holidayInEditId;
    return state.holidays.holidaysData[id];
}
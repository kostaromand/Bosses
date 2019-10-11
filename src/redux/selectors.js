
export const getUserData = (state) => {
    return state.user.userData;
}

export const getTabs = (state) => {
    return state.tabs.tabInfo
}

export const getActiveTab = (state) => {
    return state.tabs.activeTab
}

export const getOpenedModalName = (state) => {
    return state.modalWindows.openedModalName;
}

export const getHolidays = (state) => {
    return state.holidays.holidaysData;
}

export const getHolidayInEdit = (state) => {
    const id = state.holidays.holidayInEditId;
    return state.holidays.holidaysData[id];
}

export const getBossesData = (state) => {
    return state.bosses.bossesData;
}

export const getProfileData = (state) => {
    return state.profile.profileData;
}

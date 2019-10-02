export const getFilterState = (state) => {
    return state.filter.filterState;
}

export const getSearchToggleState = (state) => {
    return state.header.searchState;
}

export const getProfileData = (state) => {
    return state.profile.data;
}

export const getTabs=(state)=> {
    return state.tabs.tabInfo
}

export const getActiveTab=(state)=> {
    return state.tabs.activeTab
}
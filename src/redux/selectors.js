
import { additionalData } from '../data'

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

const getVenue = (state) => {
    const venueId = state.profileData.userInfo.masterVenueId;
    return state.userDataTypes.venues.find(venue => venue.id === venueId)
}

const getStaffType = (state) => {
    const staffTypeId = state.profileData.userInfo.staffTypeId;
    return state.userDataTypes.staffTypes.find(type => type.id === staffTypeId);
}

const getPayRate = (state) => {
    const payRateId = state.profileData.userInfo.payRateId;
    return state.userDataTypes.payRates.find(rate => rate.id === payRateId);
}

export const getProfileData = (state) => {
    return {
        ...state.profileData.userInfo,
        venue: getVenue(state),
        staffType: getStaffType(state),
        payRate: getPayRate(state)
    }
}

export const getUserSummary = (state) => {
    const { avatarUrl, firstName, surname, email, phoneNumber } = state.profileData.userInfo;
    return {
        avatarUrl,
        fullName: `${firstName} ${surname}`,
        email,
        phoneNumber,
        venue: getVenue(state),
        staffType: getStaffType(state),
        accessories: []
    }
}

export const getStaffMembers = (state) => {
    return state.bosses.staffMembers;
}

export const getStaffTypes = (state) => {
    return state.userDataTypes.staffTypes;
}

export const getVenues = (state) => {
    return state.userDataTypes.venues
}

export const getPayRates = (state) => {
    return state.userDataTypes.payRates
}

export const getAdditionalBossesData = () => {
    return additionalData;
}


import { additionalData } from '../data'
import { isEmpty } from 'lodash'
import { createSelector } from 'reselect'

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

export const selectProfileData = state => state.profileData;

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


export const getProfileData = createSelector(
    [getStaffMembers, selectProfileData, getVenues, getPayRates, getStaffTypes],
    (staffMembers, profileData, venues, payRates, staffTypes) => {
        if (isEmpty(profileData)) {
            return {}
        }
        const { masterVenueId, staffTypeId, payRateId, otherVenueIds } = profileData;
        return {
            ...profileData,
            status: staffMembers.find(member => member.id === profileData.id).status,
            venue: venues.find(venue => venue.id === masterVenueId),
            staffType: staffTypes.find(type => type.id === staffTypeId),
            payRate: payRates.find(rate => rate.id === payRateId),
            otherVenues: otherVenueIds.map(id => venues.find(venue => venue.id === id))
        }
    })

export const getUserSummary = createSelector(
    [selectProfileData, getVenues, getStaffTypes],
    (profileData, venues, staffTypes) => {
        if (isEmpty(profileData)) {
            return {}
        }
        const {
            firstName,
            surname,
            masterVenueId,
            staffTypeId,
        } = profileData;
        return {
            ...profileData,
            fullName: `${firstName} ${surname}`,
            venue: venues.find(venue => venue.id === masterVenueId),
            staffType: staffTypes.find(type => type.id === staffTypeId),
            accessories: []
        }
    })
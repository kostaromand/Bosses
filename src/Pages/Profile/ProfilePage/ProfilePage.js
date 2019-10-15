import React from 'react'
import { connect } from 'react-redux'
import { getProfileData } from '../../../redux/selectors'
import Isle from './IsleContainer/Isle'
import IsleItem from './IsleContainer/IsleItem'
import ItemValue from './IsleContainer/ItemValue'

const ProfilePage = ({ profileData }) => {
    const {
        venue = { name: "" },
        otherVenues = [],
        staffType = { name: "" },
        startsAt,
        payRate = { name: "" },
        hoursPreferenceNote,
        dayPreferenceNote,
        nationalInsuranceNumber,
        sageId,
        statusStatement
    } = profileData;

    return (
        <div className="boss-page-main__flow">
            <Isle id={1} title="Employment Details">
                <IsleItem label="Main Venue">
                    <ItemValue>
                        {venue.name}
                    </ItemValue>
                </IsleItem>
                <IsleItem label="Other Venues">
                    {
                        otherVenues.length === 0 ? (
                            <ItemValue>
                                N/A
                            </ItemValue>
                        )
                            : (
                                otherVenues.map(venue => (
                                    <ItemValue key={venue.id}>
                                        {venue.name}
                                    </ItemValue>
                                ))
                            )
                    }
                </IsleItem>
                <IsleItem label="Job Type">
                    <ItemValue>
                        {staffType.name}
                    </ItemValue>
                </IsleItem>
                <IsleItem label="Start Date">
                    <ItemValue>
                        {startsAt}
                    </ItemValue>
                </IsleItem>
                <IsleItem label="Pay Rate">
                    <ItemValue>
                        {payRate.name}
                    </ItemValue>
                </IsleItem>
                <IsleItem label="Hour Preference">
                    <ItemValue>
                        {hoursPreferenceNote}
                    </ItemValue>
                </IsleItem>
                <IsleItem label="Day Preference">
                    <ItemValue>
                        {dayPreferenceNote}
                    </ItemValue>
                </IsleItem>
                <IsleItem label="National Insurance Number">
                    <ItemValue>
                        {nationalInsuranceNumber}
                    </ItemValue>
                </IsleItem>
                <IsleItem label="Sage ID">
                    <ItemValue>
                        {sageId}
                    </ItemValue>
                </IsleItem>
                <IsleItem label="Status Statement">
                    <ItemValue>
                        {statusStatement}
                    </ItemValue>
                </IsleItem>
            </Isle>
            <Isle id={2} title="Account Details">

            </Isle>
            <Isle id={3} title="Personal Details">

            </Isle>
            <Isle id={4} title="Contact Details">

            </Isle>
            <Isle id={5} title="Mobile Apps">

            </Isle>
            <Isle id={6} title="Revisions History">

            </Isle>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        profileData: getProfileData(state)
    }
}

const maDispatchToProps = null

export default connect(mapStateToProps, maDispatchToProps)(ProfilePage);

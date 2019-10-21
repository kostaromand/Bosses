import React from 'react'
import Isle from './common/Isle'
import IsleItem from './common/IsleItem'
import moment from 'moment'
import { isNull } from 'util'
import ValueLine from './common/ValueLine'
import { Link } from 'react-router-dom'

const ProfilePage = ({ profileData }) => {
    const {
        venue,
        otherVenues,
        staffType,
        startsAt,
        payRate,
        hoursPreferenceNote,
        dayPreferenceNote,
        nationalInsuranceNumber,
        sageId,
        statusStatement,
        createdAt,
        status,
        hasUser,
        passwordSetAt,
        firstName,
        surname,
        gender,
        dateOfBirth,
        email,
        phoneNumber,
        address,
        country,
        county,
        postcode
    } = profileData;
    return (
        <div className="boss-page-main__flow">
            <Isle id={1} title="Employment Details">
                <IsleItem label="Main Venue">
                    {venue.name}
                </IsleItem>
                <IsleItem label="Other Venues">
                    {
                        otherVenues.length === 0 ? (
                            "N/A"
                        )
                            : (
                                otherVenues.map(venue => (
                                    <ValueLine key={venue.id}>
                                        {venue.name}
                                    </ValueLine>
                                ))
                            )
                    }
                </IsleItem>
                <IsleItem label="Job Type">
                    {staffType.name}
                </IsleItem>
                <IsleItem label="Start Date">
                    {startsAt}
                </IsleItem>
                <IsleItem label="Pay Rate">
                    {payRate.name}
                </IsleItem>
                <IsleItem label="Hour Preference">
                    {hoursPreferenceNote}
                </IsleItem>
                <IsleItem label="Day Preference">
                    {dayPreferenceNote}
                </IsleItem>
                <IsleItem label="National Insurance Number">
                    {nationalInsuranceNumber}
                </IsleItem>
                <IsleItem label="Sage ID">
                    {sageId}
                </IsleItem>
                <IsleItem label="Status Statement">
                    {statusStatement}
                </IsleItem>
            </Isle>
            <Isle id={2} title="Account Details">
                <IsleItem label="Created">
                    {moment(createdAt).format("MM-DD-YYYY")}
                </IsleItem>
                <IsleItem label="Status">
                    {status}
                </IsleItem>
                <IsleItem label="User">
                    {hasUser ? "Has user" : "No Associated User"}
                </IsleItem>
                <IsleItem label="Application Password">
                    {
                        !isNull(passwordSetAt) ?
                            `Password set at ${moment(passwordSetAt).format("MM-DD-YYYY")}`
                            :
                            "No information"
                    }
                </IsleItem>
                <IsleItem label="Avatar Status">
                    <ValueLine>
                        Not Setup for Facial Recognition
                            <span className="boss-tooltip boss-tooltip_position_bottom">
                            <span className="boss-tooltip__icon"></span>
                            <span className="boss-tooltip__content">
                                <span className="boss-tooltip__text">
                                    The current avatar cannot be used for apps that use facial recognition.
                                     Update the avatar to enable this functionality.
                                </span>
                            </span>
                        </span>
                    </ValueLine>
                    <ValueLine>
                        <button className="boss-button boss-button_role_exclamation boss-button_type_small">
                            Bypass Protection
                        </button>
                    </ValueLine>
                </IsleItem>
                <IsleItem label="ID Scanner App Guid">
                    <img
                        src="/images/hello-world_512.png"
                        alt="qr code preview"
                        className="boss-details__qr"
                    />
                </IsleItem>
            </Isle>

            <Isle id={3} title="Personal Details">
                <IsleItem label="Name">
                    {`${firstName} ${surname}`}
                </IsleItem>
                <IsleItem label="Gender">
                    {gender}
                </IsleItem>
                <IsleItem label="Date of Birth">
                    {dateOfBirth}
                </IsleItem>
            </Isle>

            <Isle id={4} title="Contact Details">
                <IsleItem label="Email Address">
                    {email}
                </IsleItem>
                <IsleItem label="Phone Number">
                    {phoneNumber}
                </IsleItem>
                <IsleItem label="Address">
                    <ValueLine>
                        {address}
                    </ValueLine>
                    <ValueLine>
                        {country}
                    </ValueLine>
                    <ValueLine>
                        {county}
                    </ValueLine>
                    <ValueLine>
                        {postcode}
                    </ValueLine>
                </IsleItem>
            </Isle>
            <Isle id={5} title="Mobile Apps">
                <IsleItem label="Some App">
                    <Link to='#' className="boss-details__value-action">
                        Send download email
                    </Link>
                </IsleItem>
                <IsleItem label="Other App">
                    <Link to='#' className="boss-details__value-action">
                        Send download email
                    </Link>
                </IsleItem>
                <IsleItem label="Another App">
                    <Link to='#' className="boss-details__value-action">
                        Send download email
                    </Link>
                </IsleItem>
            </Isle>
            <Isle id={6} title="Revisions History">
                <li className="boss-details__item">
                    <button
                        className="boss-button boss-button_role_view-history boss-button_type_small">
                        View History
                    </button>
                </li>
            </Isle>
        </div>

    )
}

export default ProfilePage;

import React from 'react'
import { AccessorList } from '../../../../../Components/Accessories'
import PropTypes from 'prop-types'

const UserSummaryContent = ({ content }) => {
    const {
        fullName,
        venue,
        phoneNumber,
        email,
        accessories,
        staffType,
        isDisabled,
        disabledAt,
        disableReason,
        disabledByUser
    } = content
    return (
        <div className="boss-user-summary__content">
            <div className="boss-user-summary__header">
                <h2 className="boss-user-summary__name">{fullName}</h2>
                <span
                    className="boss-button boss-button_type_small boss-button_type_no-behavior boss-user-summary__label"
                    style={{ backgroundColor: staffType.color }}>
                    {staffType.name}
                </span>
            </div>
            <div className="boss-user-summary__indicators">
                <AccessorList accessories={accessories} />
            </div>
            <ul className="boss-user-summary__review-list">
                <li className="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
                    <span className="boss-user-summary__review-marked">{venue.name}</span>
                </li>
                {isDisabled && (
                    <>
                        <li className="boss-user-summary__review-item">
                            <span className="boss-user-summary__review-label">Reason for disabling: </span>
                            <span className="boss-user-summary__review-val">{disableReason}</span>
                        </li>
                        <li className="boss-user-summary__review-item">
                            <span className="boss-user-summary__review-label">Disabled by: </span>
                            <span className="boss-user-summary__review-val">
                                <span>{disabledByUser}</span> on
                        <span>{disabledAt}</span>
                            </span>
                        </li>
                    </>
                )}
            </ul>
            {
                !isDisabled && (
                    <div className="boss-user-summary__contacts">
                        <a
                            href={`mailto:${email}`}
                            className="boss-user-summary__link boss-user-summary__link_role_email boss-user-summary__link_adjust_wrap"
                        >
                            {email}
                        </a>
                        <a
                            href={`tel:${phoneNumber}`}
                            className="boss-user-summary__link boss-user-summary__link_role_phone"
                        >
                            {phoneNumber}
                        </a>
                    </div>
                )
            }

        </div>
    )
}

UserSummaryContent.propTypes = {
    venue: PropTypes.object
}

UserSummaryContent.defaultProps = {
    venue: { name: "none" },
    staffType: { name: "none", color: "#000000" }
}

export default UserSummaryContent;


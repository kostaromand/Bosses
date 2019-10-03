import React from 'react'
import Column from './Column'
import ColumnImage from './ColumnImage';
import BossLink from './BossLink';
import { AccessorList } from '../../Accessories';
import PropTypes from 'prop-types'

const Boss = ({ data }) => {
    const { image, name, accessories, modified, status, type, masterVenue, workVenues } = data;
    return (
        <div className="boss-table__row">
            <ColumnImage imagePath={image} />
            <Column>
                <BossLink to="/">{name}</BossLink>
            </Column>
            <Column>
                <AccessorList accessories={accessories} />
            </Column>
            <Column>
                {modified}
            </Column>
            <Column>
                <button
                    className={
                        (status === "Enabled" ? "boss-button_role_enabled" : "boss-button_role_disabled")
                        + " boss-button boss-button_type_small boss-button_type_no-behavior"
                    }>
                    {status}
                </button>
            </Column>
            <Column>
                <BossLink to="/">{type}</BossLink>
            </Column>
            <Column>
                <BossLink to="/">{masterVenue}</BossLink>
            </Column>
            <Column>
                <BossLink to="/">{workVenues}</BossLink>
            </Column>
        </div>
    )
}

Boss.propTypes = {
    data: PropTypes.object
}

export default Boss;
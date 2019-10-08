import React from 'react'
import BossLink from '../../Table/BossLink';
import { AccessorList } from '../../Accessories';
import PropTypes from 'prop-types'
import { Row, CellHeader,Cell } from '../../Table';

const Boss = ({ data }) => {
    const { image, name, accessories, modified, status, type, masterVenue, workVenues } = data;
    return (
        <Row>
            <CellHeader>
                <div className="boss-table__image">
                    <BossLink to="/profile">
                        <div className="boss-avatar boss-avatar_type_combined boss-avatar_type_scannable">
                            <img src={image} alt="Avatar" className="boss-avatar__image" />
                        </div>
                    </BossLink>
                </div>
            </CellHeader>
            <Cell>
                <BossLink to="/">{name}</BossLink>
            </Cell>
            <Cell>
                <AccessorList accessories={accessories} />
            </Cell>
            <Cell>
                {modified}
            </Cell>
            <Cell>
                <button
                    className={
                        (status === "Enabled" ? "boss-button_role_enabled" : "boss-button_role_disabled")
                        + " boss-button boss-button_type_small boss-button_type_no-behavior"
                    }>
                    {status}
                </button>
            </Cell>
            <Cell>
                <BossLink to="/">{type}</BossLink>
            </Cell>
            <Cell>
                <BossLink to="/">{masterVenue}</BossLink>
            </Cell>
            <Cell>
                <BossLink to="/">{workVenues}</BossLink>
            </Cell>
        </Row>
    )
}

Boss.propTypes = {
    data: PropTypes.object
}

export default Boss;
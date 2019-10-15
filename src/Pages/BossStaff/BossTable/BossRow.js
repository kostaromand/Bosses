import React from 'react'
import BossLink from '../../../Components/Table/BossLink';
import { AccessorList } from '../../../Components/Accessories';
import PropTypes from 'prop-types'
import { Row, CellHeader, Cell } from '../../../Components/Table';

const Boss = ({ memberInfo, venue, staffType, additionalData }) => {
    const { avatarUrl, firstName, surname, status } = memberInfo;
    const { accessories, workVenues, modified } = additionalData;
    return (
        <Row>
            <CellHeader>
                <div className="boss-table__image">
                    <BossLink to="/profile">
                        <div className="boss-avatar boss-avatar_type_combined boss-avatar_type_scannable">
                            <img src={avatarUrl} alt="Avatar" className="boss-avatar__image" />
                        </div>
                    </BossLink>
                </div>
            </CellHeader>
            <Cell>
                <BossLink to="/">{`${firstName} ${surname}`}</BossLink>
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
                        (status === "enabled" ? "boss-button_role_enabled" : "boss-button_role_disabled")
                        + " boss-button boss-button_type_small boss-button_type_no-behavior"
                    }>
                    {status}
                </button>
            </Cell>
            <Cell>
                <BossLink to="/">{staffType.name}</BossLink>
            </Cell>
            <Cell>
                <BossLink to="/">{venue.name}</BossLink>
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


Boss.defaultProps = {
    venue: { name: "none" },
    staffType: { name: "none" }
}

export default Boss;
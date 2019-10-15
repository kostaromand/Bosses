import React from 'react'
import { AccessorList } from '../../../Components/Accessories';
import PropTypes from 'prop-types'
import { Row, CellHeader, Cell } from '../../../Components/Table';
import { Link } from 'react-router-dom'

const Boss = ({ memberInfo, venue, staffType, additionalData }) => {
    const { avatarUrl, firstName, surname, status, id } = memberInfo;
    const { accessories, workVenues, modified } = additionalData;
    return (
        <Row>
            <CellHeader>
                <div className="boss-table__image">
                    <Link to={`/profile/${id}`} className="boss-table__link">
                        <div className="boss-avatar boss-avatar_type_combined boss-avatar_type_scannable">
                            <img src={avatarUrl} alt="Avatar" className="boss-avatar__image" />
                        </div>
                    </Link>
                </div>
            </CellHeader>
            <Cell>
                <Link to="/">{`${firstName} ${surname}`}</Link>
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
                <Link to="/">{staffType.name}</Link>
            </Cell>
            <Cell>
                <Link to="/">{venue.name}</Link>
            </Cell>
            <Cell>
                <Link to="/">{workVenues}</Link>
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
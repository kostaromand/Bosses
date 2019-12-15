import React from 'react'
import BossRow from './BossRow'
import { CellHeader } from '../../../Components/Table';
import { connect } from 'react-redux'
import {
    getStaffMembers,
    getStaffTypes,
    getVenues,
    getAdditionalBossesData
} from '../../../redux/selectors'

const headerNames = [
    "",
    "Name",
    "Accessories",
    "Modified",
    "Status",
    "Type",
    "Master Venue",
    "Work Venues"
];

const bossCount = 3123;

const BossTable = ({ staffMembers, staffTypes, venues, additionalData }) => {
    return (
        <div className="boss-table boss-table_page_staff-members-index">
            <div className="boss-table__row">
                {
                    headerNames.map(element => (
                        <CellHeader key={element} classes="boss-table__cell_role_header">
                            {element}
                        </CellHeader>
                    ))
                }
            </div>
            {
                staffMembers.slice(0, bossCount).map(staffMember => {
                    const staffType = staffTypes.find(type => staffMember.staffTypeId === type.id);
                    const venue = venues.find(venue => venue.id === staffMember.masterVenueId);
                    return <BossRow
                        key={staffMember.id}
                        memberInfo={staffMember}
                        staffType={staffType}
                        venue={venue}
                        additionalData={additionalData}
                    />
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        staffMembers: getStaffMembers(state),
        staffTypes: getStaffTypes(state),
        venues: getVenues(state),
        additionalData: getAdditionalBossesData()
    }
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(BossTable);
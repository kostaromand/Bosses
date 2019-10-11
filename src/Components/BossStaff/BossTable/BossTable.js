import React from 'react'
import BossRow from './BossRow'
import { CellHeader } from '../../Table';

const headerNames = [
    "",
    "Name",
    "Accessories",
    "Modified Status",
    "Type",
    "Master",
    "Venue",
    "Work Venues"];

const BossTable = ({bossesData}) => {
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
            {bossesData.map((element, id) =>
                <BossRow key={id} data={element} />
            )}
        </div>
    )
}

export default BossTable;
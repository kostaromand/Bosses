import React from 'react'
import Boss from './Boss'
import { bossData } from "../../../data"
import Cell from './Cell';

const headerNames = [
    "",
    "Name",
    "Accessories",
    "Modified,Status",
    "Type",
    "Master",
    "Venue",
    "Work Venues"];

const BossTable = () => {
    return (
        <div className="boss-table boss-table_page_staff-members-index">
            <div className="boss-table__row">
                {
                    headerNames.map(element => (
                        <Cell key={element} classes="boss-table__cell_role_header">
                            {element}
                        </Cell>
                    ))
                }
            </div>
            {bossData.map((element, id) =>
                <Boss key={id} data={element} />
            )}
        </div>
    )
}

export default BossTable;
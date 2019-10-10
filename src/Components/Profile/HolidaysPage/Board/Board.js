import React from 'react'
import BoardStat from './BoardStat'
import Filter from './Filter'
import HolidayTable from './Table/HolidayTable'

const Board = () => {
    return (
        <div className="boss-board__manager">
            <div className="boss-board__manager-stats boss-board__manager-stats_layout_row">
                <BoardStat number={6} label="something" />
                <BoardStat number={6} label="something" />
                <BoardStat number={6} label="something" />
            </div>
            <div className="boss-board__manager-group boss-board__manager-group_role_data">
                <Filter />
                <HolidayTable/>
            </div>
        </div>
    )
}

export default Board

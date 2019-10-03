import React from 'react'

const BoardStat = ({ number, label }) => {
    return (
        <div class="boss-count boss-count_adjust_row">
            <div class="boss-count__group">
                <p class="boss-count__number">{number}</p>
                <p class="boss-count__label">{label}</p>
            </div>
        </div>
    )
}

export default BoardStat

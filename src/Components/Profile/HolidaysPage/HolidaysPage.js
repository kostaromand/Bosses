import React from 'react'
import HeaderButton from './HeaderButton'
import Board from './Board'

const HolidaysPage = () => {
    return (
        <section className="boss-board">
            <header className="boss-board__header">
                <h2 className="boss-board__title">Holidays and holiday requests</h2>
                <HeaderButton/>
            </header>
            <div className="boss-board__main">
                <Board/>
            </div>
        </section>

    )
}

export default HolidaysPage

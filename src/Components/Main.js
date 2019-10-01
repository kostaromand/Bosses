import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import BossTable from './Boss/BossTable'

const Main = () => {
    return (
        <main className="boss-page-main">
            <Dashboard />
            <div className="boss-page-main__content">
                <div className="boss-page-main__inner">
                    <BossTable />
                </div>
            </div>
        </main>
    )
}

export default Main;

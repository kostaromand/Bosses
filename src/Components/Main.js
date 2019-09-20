import React, { Component } from 'react'
import Dashboard from './Dashboard/Dashboard'
import BossTable from './BossTable'

export default class Main extends Component {
    render() {
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
}

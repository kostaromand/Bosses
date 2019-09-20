import React, { Component } from 'react'
import DashboardFilterContent from './DashboardFilterContent'

export default class DashboardFilter extends Component {
    render() {
        return (
            <div className="boss-page-dashboard__filter">
                <div className="boss-dropdown">
                    <div className="boss-dropdown__header">
                        <a href="#" className="boss-dropdown__switch boss-dropdown__switch_role_filter boss-dropdown__switch_state_opened">Filter</a>
                    </div>
                    <DashboardFilterContent />
                </div>
                
            </div>
        )
    }
}

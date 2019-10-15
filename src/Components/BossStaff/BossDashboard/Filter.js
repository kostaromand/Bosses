import React, { Component } from 'react'
import DashboardForm from "./DashboardForm"
import {  Link } from 'react-router-dom'

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterState: false
        }
    }

    toggleFilter = () => {
        this.setState(prevState => ({ filterState: !prevState.filterState }))
    }

    render = () => {
        const { filterState } = this.state;
        const filterStateClass = "boss-dropdown__switch_state_opened";
        return (
            <div className="boss-page-dashboard__filter">
                <div className="boss-dropdown">
                    <div className="boss-dropdown__header">
                        <Link to="#"
                            onClick={this.toggleFilter}
                            className={
                                `boss-dropdown__switch boss-dropdown__switch_role_filter ${(filterState && filterStateClass)}`}
                        >
                            Filter
                      </Link>
                    </div>
                    {
                        filterState && (
                            <div className="boss-dropdown__content boss-dropdown__content_state_opened">
                                <div className="boss-dropdown__content-inner">
                                    <DashboardForm />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Filter;
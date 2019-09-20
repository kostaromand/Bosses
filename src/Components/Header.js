import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className = "boss-page-header">
                <div className="boss-page-header__inner">
                    <div className="boss-page-header__group boss-page-header__group_role_logo">
                        <a className="boss-page-header__logo">Boss</a>
                    </div>
                    <a href="#" className="boss-page-header__action boss-page-header__action_role_search" data-dropdown="search">Search</a>
                    <a href="#" className="boss-page-header__action boss-page-header__action_role_profile" data-dropdown="profile">Profile</a>
                </div>
            </header>
        )
    }
}

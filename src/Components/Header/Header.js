import React, { Component } from 'react'
import Dropdown from "./Dropdown"
import Search from './Search'
export default function Header () {
    return (
        <header className="boss-page-header">
            <div className="boss-page-header__inner">
                <div className="boss-page-header__group boss-page-header__group_role_logo">
                    <a className="boss-page-header__logo">Boss</a>
                </div>
                <Search />
                <a href="#"
                    className="boss-page-header__action boss-page-header__action_role_profile"
                    data-dropdown="profile"
                >
                    Profile
                    </a>
                <div className="boss-page-header__dropdowns">
                    <Dropdown />
                </div>
            </div>
        </header>
    )
}

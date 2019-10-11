import React from 'react'
import Dropdown from "./Dropdown"
import Search from './Search'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchState: false
        }
    }

    toggleSearch = () => {
        this.setState(prev => ({ searchState: !prev.searchState }))
    }

    render = () => {
        const { searchState } = this.state;
        return (
            <header className="boss-page-header">
                <div className="boss-page-header__inner">
                    <div className="boss-page-header__group boss-page-header__group_role_logo">
                        <a href="/" className="boss-page-header__logo">Boss</a>
                    </div>
                    <Search toggleSearch={this.toggleSearch} searchState={searchState} />
                    <a href="/"
                        className="boss-page-header__action boss-page-header__action_role_profile"
                        data-dropdown="profile"
                    >
                        Profile
                    </a>
                    <div className="boss-page-header__dropdowns">
                        <Dropdown searchState={searchState} toggleSearch={this.toggleSearch} />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
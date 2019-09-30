import React from 'react'
import PropTypes from 'prop-types'

const BossAlias = ({ iconStyle, aliasStyle, iconName, aliasText }) => {
    return (
        <div className="boss-quick-access__alias">
            <div className="boss-alias">
                <a href="#" className="boss-alias__link">
                    <span className="boss-alias__icon boss-alias__icon_type_solid" style={iconStyle}>
                        {iconName}
                    </span>
                    <span className="boss-alias__text" style={aliasStyle}>
                        {aliasText}
                    </span>
                </a>
            </div>
        </div>
    )
}


BossAlias.propTypes = {
    iconStyle: PropTypes.object,
    aliasStyle: PropTypes.object,
    iconName: PropTypes.string,
    aliasText: PropTypes.string
}


export default BossAlias

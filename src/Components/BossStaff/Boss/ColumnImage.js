import React from 'react'
import PropTypes from 'prop-types'
import BossLink from './BossLink'

const ColumnImage = ({ imagePath }) => {
    return (
        <div className="boss-table__cell">
            <div className="boss-table__image">
                <BossLink to="/profile">
                    <div className="boss-avatar boss-avatar_type_combined boss-avatar_type_scannable">
                        <img src={imagePath} alt="Avatar" className="boss-avatar__image" />
                    </div>
                </BossLink>
            </div>
        </div>
    )
}

ColumnImage.propTypes = {
    imagePath: PropTypes.string.isRequired
}

export default ColumnImage;
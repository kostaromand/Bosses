import React from 'react'
import PropTypes from 'prop-types'

const ColumnImage = ({ imagePath }) => {
    return (
        <div className="boss-table__cell">
            <div className="boss-table__image">
                <a href="/" className="boss-table__link">
                    <div className="boss-avatar boss-avatar_type_combined boss-avatar_type_scannable">
                        <img src={imagePath} alt="Avatar" className="boss-avatar__image" />
                    </div>
                </a>
            </div>
        </div>
    )
}

ColumnImage.propTypes = {
    imagePath: PropTypes.string.isRequired
}

export default ColumnImage;
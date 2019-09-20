import React from 'react'
export default function ColumnImage({ imagePath }) {
    return (
        <div className="boss-table__cell">
            <div className="boss-table__image">
                <a href="#" className="boss-table__link">
                    <div className="boss-avatar boss-avatar_type_combined boss-avatar_type_scannable">
                        <img src={imagePath} className="boss-avatar__image" />
                    </div>
                </a>
            </div>
        </div>
    )
}

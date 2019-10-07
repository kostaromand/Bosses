import React from 'react'
import Column from './Column'
import PropTypes from 'prop-types'

const InfoGroupCell = ({ children, labelName, textStyle }) => {
    return (
        <Column>
            <div className="boss-table__info">
                <p className="boss-table__label">{labelName}</p>
                <div className="boss-table__info-group">
                    <p className="boss-table__text">
                       {children}
                    </p>
                </div>
            </div>
        </Column>
    )
}

InfoGroupCell.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    labelName: PropTypes.string
}

export default InfoGroupCell;
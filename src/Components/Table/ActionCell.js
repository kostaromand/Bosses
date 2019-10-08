import React from 'react'
import CellHeader from './CellHeader'
import PropTypes from 'prop-types'

const ActionCell = ({ children, labelName, textStyle }) => {
    return (
        <CellHeader>
            <div className="boss-table__info">
                <p className="boss-table__label">{labelName}</p>
                <p className={`boss-table__actions ${textStyle}`}>
                    {children}
                </p>
            </div>
        </CellHeader>
    )
}

ActionCell.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    labelName: PropTypes.string
}

export default ActionCell;
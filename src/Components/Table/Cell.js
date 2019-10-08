import React from 'react'
import CellHeader from './CellHeader'
import PropTypes from 'prop-types'

const Cell = ({ children, labelName, textStyle }) => {
    return (
        <CellHeader>
            <div className="boss-table__info">
                <p className="boss-table__label">{labelName}</p>
                <p className={`boss-table__text ${textStyle}`}>
                    {children}
                </p>
            </div>
        </CellHeader>
    )
}

Cell.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    labelName: PropTypes.string
}

export default Cell;
import React from 'react'
import Column from './Column'
import PropTypes from 'prop-types'

const Cell = ({ children, labelName, textStyle }) => {
    return (
        <Column>
            <div className="boss-table__info">
                <p className="boss-table__label">{labelName}</p>
                <p className={`boss-table__text ${textStyle}`}>
                    {children}
                </p>
            </div>
        </Column>
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
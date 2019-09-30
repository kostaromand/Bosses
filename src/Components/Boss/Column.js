import React from 'react'
import Cell from './Cell'
import PropTypes from 'prop-types'

export default function Column({ children, labelName }) {
    return (
        <Cell>
            <div className="boss-table__info">
                <p className="boss-table__label">{labelName}</p>
                <p className="boss-table__text">
                    {children}
                </p>
            </div>
        </Cell>
    )
}

Column.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    labelName: PropTypes.string
}


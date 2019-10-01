import React from 'react'
import Tooltip from './Tooltip'
import PropTypes from 'prop-types'

const Indicator = ({ type, tooltip, count, color }) => {
    return (
        <span className="boss-indicator boss-indicator_adjust_tooltip boss-indicator_adjust_flow">
            <span className={`boss-indicator__icon boss-indicator__icon_accessory ${type}`} style={{ color }}></span>
            {
                count > 0 && <span className="boss-indicator__counter">{count}</span>
            }
            <Tooltip {...tooltip} />
        </span>
    )
}

Indicator.propTypes = {
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tooltip: PropTypes.object,
    count: PropTypes.number,
    color: PropTypes.string
}

export default Indicator;
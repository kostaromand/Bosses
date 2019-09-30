import React from 'react'
import Tooltip from './Tooltip'

export default function Indicator({ type, tooltip, count, color }) {
    const counter = (count > 0 ?
        <span className="boss-indicator__counter">{count}</span>
        :
        ""
    )
    return (
        <span className="boss-indicator boss-indicator_adjust_tooltip boss-indicator_adjust_flow">
            <span className={`boss-indicator__icon boss-indicator__icon_accessory ${type}`} style={{ color }}></span>
            {counter}
            <Tooltip {...tooltip} />
        </span>
    )
}

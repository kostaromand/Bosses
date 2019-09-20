import React from 'react'

export default function Indicator() {
    return (
        <div>
            <span className="boss-indicator boss-indicator_adjust_tooltip boss-indicator_adjust_flow">
                <span className="boss-indicator__icon boss-indicator__icon_accessory" style={{color:'#4c4c4c'}}></span>
                <span className="boss-indicator__tooltip">
                    <span className="boss-indicator__tooltip-line">
                        <span className="boss-indicator__tooltip-marked">Accessory Name</span>
                    </span>
                    <span className="boss-indicator__tooltip-line">Venue Name</span>
                </span>
            </span>
        </div >
    )
}

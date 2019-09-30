import React from 'react';

const Tooltip = ({header,text }) => {
    return (
        <span className="boss-indicator__tooltip">
            <span className="boss-indicator__tooltip-line">
                <span className="boss-indicator__tooltip-marked">{header}</span>
            </span>
            <span className="boss-indicator__tooltip-line">{text}</span>
        </span>
    );
}

export default Tooltip;

import React from 'react';
import PropTypes from 'prop-types'

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

Tooltip.propTypes = {
    header:PropTypes.string,
    text: PropTypes.string
}

export default Tooltip;

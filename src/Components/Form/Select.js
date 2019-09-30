import React from 'react'
import PropTypes from 'prop-types'

export default function Select({input, options, placeholder }) {
    return (
        <div className="boss-form__select">
            <div className="Select Select--single is-open" style={{ overflow: "visible" }}>
                <div className="Select-control">
                    <span className="Select-multi-value-wrapper" id="react-select-2--value">
                        <div className="Select-placeholder">{placeholder}</div>
                        <div
                            style={{ border: "0px none", width: "1px", display: "inline-block" }}
                            role="combobox"
                            aria-expanded="true"
                            aria-owns="react-select-2--list"
                            aria-activedescendant="react-select-2--option-1"
                            className="Select-input">
                        </div>
                    </span>
                    <span className="Select-arrow-zone">
                        <span className="Select-arrow">
                        </span>
                    </span>
                </div>
                <div className="Select-menu-outer">
                    <div role="listbox" {...input} className="Select-menu" id="react-select-2--list">
                        <div className="Select-option is-focused" id="react-select-2--option-1">
                        </div>
                        <div className="Select-option" id="react-select-2--option-2">{options[1]}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Select.propTypes = {
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired
}

import React from 'react'
import QuickAccessGroupContainer from './QuickAccessGroupContainer'

const DropdownContent = () => {
    return (
        <div className="boss-page-header__dropdown-scroll" style={{ "touchAction": "none" }}>
            <div
                className="boss-page-header__dropdown-content"
                style={{ transform: "translate(0px, 0px) translateZ(0px)" }}
            >
                <QuickAccessGroupContainer />
                <div className="iScrollVerticalScrollbar iScrollLoneScrollbar"
                    style={
                        {
                            "position": "absolute",
                            "zIndex": "9999",
                            "width": "7px",
                            "bottom": "2px; top: 2px",
                            "right": "1px",
                            "overflow": "hidden"
                        }}
                >
                </div>
            </div>
        </div>
    )
}

export default DropdownContent

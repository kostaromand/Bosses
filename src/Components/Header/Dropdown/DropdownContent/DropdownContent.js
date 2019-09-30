import React from 'react'
import QuickAccessGroupContainer from './QuickAccessGroupContainer'
import iscroll from "iscroll"
import ReactIScroll from "react-iscroll"

const DropdownContent = () => {
    return (
        <ReactIScroll iScroll={iscroll} options={{
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: false,
            click: true
        }}>
            <div className="boss-page-header__dropdown-content">
                <QuickAccessGroupContainer />
            </div>
        </ReactIScroll>
    )
}

export default DropdownContent
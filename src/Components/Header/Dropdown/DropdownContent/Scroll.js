import React from 'react';

const Scroll = () => {
    return (
        <div className="iScrollVerticalScrollbar iScrollLoneScrollbar"
            style={
                {
                    position: "absolute",
                    zIndex: "9999",
                    width: "7px",
                    bottom: "2px",
                    top: "2px",
                    right: "1px",
                    overflow: "hidden"
                }}
        >
            <div
                className="iScrollIndicator"
                style={{
                    boxSizing: "border-box",
                    position: "absolute",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.9)",
                    borderRadius: "3px",
                    width: "100%",
                    transitionDuration: "0ms",
                    display: "block",
                    height: "33px",
                    transform: "translate(0px, 0px) translateZ(0px)"
                }}
            >

            </div>
        </div>
    );
}

export default Scroll;




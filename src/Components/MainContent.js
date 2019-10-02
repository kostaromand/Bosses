import React from 'react'

const MainContent = ({ children }) => {
    return (
        <div>
            <div className="boss-page-main__content">
                <div className="boss-page-main__inner">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainContent

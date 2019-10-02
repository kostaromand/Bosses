import React from 'react'

const Dashboard = ({ classes, children }) => {
    return (
        <div className="boss-page-main__dashboard">
            <div className="boss-page-main__inner">
                <div className={`boss-page-dashboard boss-page-dashboard_updated ${classes}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

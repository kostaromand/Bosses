import React from 'react'
import MainContent from '../common/MainContent'

const MainLayout = ({ Dashboard, Content }) => {
    return (
        <main className="boss-page-main">
            <Dashboard/>
            <MainContent>
                <Content/>
            </MainContent>
        </main>
    )
}

export default MainLayout;

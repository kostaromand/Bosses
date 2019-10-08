import React from 'react'
import MainContent from './MainContent'

const Main = ({ Dashboard, Content }) => {
    return (
        <main className="boss-page-main">
            <Dashboard/>
            <MainContent>
                <Content/>
            </MainContent>
        </main>
    )
}

export default Main;

import React from 'react'
import MainContent from './MainContent'

const Main = ({ dashboard, content }) => {
    return (
        <main className="boss-page-main">
            {dashboard()}
            <MainContent>
                {content()}
            </MainContent>
        </main>
    )
}

export default Main;

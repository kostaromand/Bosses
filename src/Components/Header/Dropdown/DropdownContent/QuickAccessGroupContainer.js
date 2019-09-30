import React from 'react'
import QuickAccessGroup from './QuickAccessGroup'
import { aliasData } from "../../../../data"
const QuckAccessGroupContainer = () => {
    return (
        <div className="boss-quick-access">
            {
                aliasData.map((group, id) => (
                    <QuickAccessGroup key={id} {...group} />
                ))
            }
            {
                aliasData.map((group, id) => (
                    <QuickAccessGroup key={id} {...group} />
                ))
            }
            {
                aliasData.map((group, id) => (
                    <QuickAccessGroup key={id} {...group} />
                ))
            }

        </div>
    )
}

export default QuckAccessGroupContainer

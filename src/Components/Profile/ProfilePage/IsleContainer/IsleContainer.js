import React from 'react'
import Isle from './Isle'
import { isles, items } from './mainFlowData'
const IsleContainer = () => {
    return (
        isles.map(isle => {
            const isleItems = items.filter(item => item.isleId === isle.id);
            return (
                <Isle key={isle.id} {...isle} items={isleItems} />
            )
        })
    )
}

export default IsleContainer

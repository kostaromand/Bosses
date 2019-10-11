import React from 'react'
import Isle from './Isle'
import { isles } from './islesData'
const IsleContainer = ({profileData}) => {
    console.log(profileData)
    return (
        isles.map(isle => {
            const isleItems = profileData.filter(item => item.isleId === isle.id);
            return (
                <Isle key={isle.id} {...isle} items={isleItems} />
            )
        })
    )
}

export default IsleContainer

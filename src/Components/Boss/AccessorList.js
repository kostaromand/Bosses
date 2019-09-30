import React from 'react'
import Indicator from "./Indicator"
export default function AccessorList({ accessories }) {
    return (
        <>
            {
                accessories.map((elem, id) => (
                    <Indicator key={id}  {...elem} />
                ))
            }

        </>
    )
}

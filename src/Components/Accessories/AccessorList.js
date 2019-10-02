import React from 'react'
import Indicator from "./Indicator"
import PropTypes from 'prop-types'

const AccessorList = ({ accessories }) => {
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

AccessorList.propTypes = {
    accessories: PropTypes.array.isRequired
}

export default AccessorList;
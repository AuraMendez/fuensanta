import React from 'react'

const Dates = (props) => {
    return (
        <div>
            <p>Here go all the dates</p>
            <p>{props.date1}</p>
        </div>
    )
}

Dates.defaultProps = {
    date1: '17 march 2023',
}

export default Dates

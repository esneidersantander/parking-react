import React from 'react'

export const RowTable = ({id, time, available}) => {
    return (
        <div className="home__table-row pointer">
            <div>{time}</div>
            <div>{available}</div>
            <div>Disponible</div>
        </div>
    )
}

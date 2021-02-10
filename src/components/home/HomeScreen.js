import React from 'react'
import { HeaderTable } from '../ParkingTable/HeaderTable'
import {Table} from '../ParkingTable/Table'

export const HomeScreen = () => {
    return (
        <div className="home__main-content">
            <HeaderTable/>
            <Table/>
        </div>
    )
}

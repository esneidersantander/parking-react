import React from 'react'
import { RowTable } from './RowTable'

export const Table = () => {
    const test = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    return (
        <>
            {
                test.map(x=>{
                    return <RowTable/>
                })
            }
        </>
    )
}

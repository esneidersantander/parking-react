import React, { useEffect, useState } from 'react'
import { getParking } from '../../helpers/getParkings';
import { RowTable } from './RowTable'

export const Table = () => {
    const test = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    const [parkings, setParkings] = useState()
    
    useEffect(() => {
        if (!parkings) {
            getParking(setParkings);
        }
      }, []);

    return (
        <>
            {
                parkings&&
                    parkings.map(x=>{
                        return <RowTable key={x.id} {...x}/>
                    })
                
            }
        </>
    )
}

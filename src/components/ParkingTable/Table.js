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

/*     const getParking = async ()=>{
        const url = 'http://localhost:3000/parkings';
        console.log(setParkings);
        try {
            const resp = await fetch (url)
            if (resp.ok) {
                const data = await resp.json();
                setParkings(data)
            }else{
                throw await resp.json();
            }
        } catch (error) {
            throw error;
        }
    } */
    console.log(parkings);
    return (
        <>
            {
                parkings&&
                    parkings.map(x=>{
                        return <RowTable key={x.id} value={x}/>
                    })
                
            }
        </>
    )
}

import React, { useState } from 'react'
import AppRouter from './routers/AppRouter'
import {UserContext} from './context/UserContext'
export const ParkingApp = () => {

    const [user, setUser] = useState({logged:false})
    return (
        <UserContext.Provider value={{user, setUser}}>
            <AppRouter/>
        </UserContext.Provider>
    )
}

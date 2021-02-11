import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';
import { HeaderTable } from '../ParkingTable/HeaderTable'
import {Table} from '../ParkingTable/Table'

export const HomeScreen = () => {

    const {user, setUser} = useContext(UserContext);
    
    




    const handleLogout= () =>{
        logout()
    }

    const logout =()=>{
        setUser(
            {
                logged:false
            }
        )
        localStorage.setItem('user', JSON.stringify({
            logged:false
        }))
    }
    return (
        <div className="home__main-content">
            <div 
                className="home__main-header"
                onClick={handleLogout}
            >
                <i className="fas fa-power-off pointer"></i>
            </div>
            <HeaderTable/>
            <Table/>
        </div>
    )
}

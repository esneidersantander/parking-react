import React, { useContext, useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { UserContext } from "../context/UserContext";
import {PrivateRoute} from './PrivateRoute'
import {PublicRoute} from './PublicRoute'

export default function AppRouter() {

    const {user} = useContext(UserContext);
    const userStor = JSON.parse(localStorage.getItem('user'))
    const [isAuthenticated, setIsAuthenticated] = useState(false)

  

    useEffect(() => {
        if (!userStor) {
            setIsAuthenticated(user.logged)
        }else{
            setIsAuthenticated(userStor.logged)
        }  
    }, [user])

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated ={isAuthenticated} 
                        path='/auth/login' 
                        component= { LoginScreen }
                    />
                    <PrivateRoute 
                        exact
                        isAuthenticated = {isAuthenticated}
                        path='/' 
                        component= { HomeScreen }
                    />
                </Switch>
            </div>
        </Router>
    );
}

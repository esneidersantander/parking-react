import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { HomeScreen } from "../components/home/HomeScreen";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth/login"
                        component={LoginScreen}
                    />
                    <Route  
                        exact
                        path="/"
                        component={HomeScreen}
                    />
                </Switch>
            </div>
        </Router>
    );
}

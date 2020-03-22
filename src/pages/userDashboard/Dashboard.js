import React from 'react';
import { getToken } from '../../_helpers/authenticationChecker'
import AuthNavbar from '../../components/_navigation_/AuthNavbar';
import SideBar from '../../components/_navigation_/SideBar';
import Navbar from '../../components/_navigation_/Navbar';
import DashboardHome from './DashboardHome';
import Values from'../Values';
import MyValues from '../Values/MyValues';
import { StyledDashboard } from '../../components/Styles/StyledDashboard';
import Login from '../../pages/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Dashboard(props) {
    const token = getToken();
    console.log(token);

    return (
        <Router>
            {
                token ? 
                <>
                    <SideBar />
                    <AuthNavbar /> 
                    <StyledDashboard>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path="/dashboard" component={DashboardHome} />
                                <Route path="/dashboard/allvalues" component={Values} />
                                <Route path="/dashboard/myvalues" component={MyValues} />
                            </Switch>
                        </div>
                    </StyledDashboard>
                </>
                : <Login />
            }
            
        </Router>
    )
}


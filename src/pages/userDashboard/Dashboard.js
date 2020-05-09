import React from 'react';
import { getToken } from '../../Utilities/authenticationChecker'
import AuthNavbar from '../../Components/_navigation_/AuthNavbar';
import SideBar from '../../Components/_navigation_/SideBar';
import Navbar from '../../Components/_navigation_/Navbar';
import DashboardHome from './DashboardHome';
import Values from'../Values/Values';
import MyValues from '../Values/MyValues';
import { StyledDashboard } from '../../Components/Styles/StyledDashboard';

export default function Dashboard(props) {
    const token = getToken();
    console.log(token);

    return (
        
    )
}


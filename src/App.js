import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/userDashboard/Dashboard';
import  {Global} from './components/Styles/Global_Styles/StyledGlobalStyles'
import DashboardHome from './pages/userDashboard/DashboardHome';
import MyValues from './pages/Values/MyValues';
import Values from './pages/Values';

function App() {
  return (
    <>
      <Global />
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/about" component={AboutUs}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <ProtectedRoute path="/dashboard/allvalues" component={Values} />
        <ProtectedRoute path="/dashboard/myvalues" component={MyValues} />

        <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
  </>
  );
}

// export default connect(state=>state, actions)(App);
export default App;
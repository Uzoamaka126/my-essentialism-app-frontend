import React from 'react';
import { ThemeProvider } from "@chakra-ui/core";
import { Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';

import Home from './pages/Home';
import AboutUs from './pages/Landing/AboutUs';
import Login from './pages/Auth/Login/Login';
import Signup from './pages/Auth/Signup/Signup';
import Dashboard from './pages/userDashboard/Dashboard';
import MyValues from './pages/Values/MyValues';
import Values from './pages/Values/Values';
import { customTheme } from './Components/Styles/Global/Theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/about" component={AboutUs}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <ProtectedRoute path="/dashboard/allvalues" component={Values} />
        <ProtectedRoute path="/dashboard/myvalues" component={MyValues} />

        <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
  </ThemeProvider>
  );
}
export default App;
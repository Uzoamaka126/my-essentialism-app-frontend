import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/userDashboard/Dashboard';
import  {Global} from './components/_styles_/Global_Styles/StyledGlobalStyles'

function App() {
  return (
    <>
      <Global />
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/about" component={AboutUs}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <ProtectedRoute path="/dashboard" component={Dashboard}/>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
  </>
  );
}

// export default connect(state=>state, actions)(App);
export default App;
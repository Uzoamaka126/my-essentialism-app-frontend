import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as actions from './redux-store/actions/actionCreators';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/userDashboard/Dashboard';


function App(props) {
  return (
    <Router>
        <div className="App">
        <main>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </main>
      </div>
    </Router>
  );
}

export default connect(state=>state, actions)(App);

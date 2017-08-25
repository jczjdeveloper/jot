import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux'

// import './App.css';

// Import different components for react-router
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import LoadingPage from '../LoadingPage/LoadingPage';
import NotFound from '../NotFound/NotFound';
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/loadingpage" component={LoadingPage}/>
          <Route component="/notfound" component={NotFound}/>
=
        </Switch>
      </Router>
    );
  }
}

export default App;



// <Route exact path="/dashboard" component={Dashboard}/>

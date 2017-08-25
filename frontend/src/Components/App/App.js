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

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
=
        </Switch>
      </Router>
    );
  }
}

export default App;

// <Route exact path="/login" component={Login}/>
// <Route exact path="/signup" component={Signup}/>
// <Route exact path="/dashboard" component={Dashboard}/>

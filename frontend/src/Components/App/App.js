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
import Tasklist from '../Tasklist/Tasklist';
import TasklistHeader from '../TasklistHeader/TasklistHeader';
import TasklistContent from '../TasklistContent/TasklistContent';
import TaskItemDescription from '../TaskItemDescription/TaskItemDescription';

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
          <Route exact path="/tasklist" component={Tasklist}/>
          <Route exact path="/tasklistheader" component={TasklistHeader}/>
          <Route exact path="/tasklistcontent" component={TasklistContent}/>
          <Route exact path="/taskitemdescription" component={TaskItemDescription}/>
          <Route component="/notfound" component={NotFound}/>
=
        </Switch>
      </Router>
    );
  }
}

export default App;

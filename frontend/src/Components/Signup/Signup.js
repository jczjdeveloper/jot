import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

// Import CSS styling
import './Signup.css'

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container signupFullWrapper">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-primary">
            <div className="panel-heading" id="formHeader">SIGNUP</div>
            <br />
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="signupFirstName" placeholder="Please enter First Name" onChange={this.onChange}/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="signupLastName" placeholder="Please enter Last Name" onChange={this.onChange}/>
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Please enter email" onChange={this.onChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Please enter password" onChange={this.onChange}/>
            <br/>
            <button type="submit" className="btn btn-primary submit" id="signupBtn">Sign Up</button>
            <br/>
            <Link to="/login">
              <button type="submit" className="btn btn-default submit" id="backToLoginBtn">Back to Log In</button>
            </Link>
            <Link to="/">
              <button type="submit" className="btn btn-default submit" id="backToHomeBtn">Back to home</button>
            </Link>

          </div>

        </div>
      </div>
    );
  }
}

Signup.propTypes = {};

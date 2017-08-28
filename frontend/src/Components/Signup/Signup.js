import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

// Import CSS styling
import './Signup.css'

// Import component Actions
import {localSignup} from '../Actions/User';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      tasklist: []
    }
  }

  onChange = (e) => {
    let state = this.state
    let key = e.target.id;
    let value = e.target.value;

    state[key] = value;
    console.log(state);
    this.setState(state);
  }

  localSignup = (e) => {
    e.preventDefault();
    console.log("Fire signup action");
    this.props.userSignup(state);
    // console.log("signup action sent");
    // this.props.history.push('/login');
  }



  render() {
    return (
      <div className="container signupFullWrapper">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-primary">
            <div className="panel-heading" id="formHeader">SIGNUP</div>
            <br />
            <label htmlFor="firstName">First Name</label>
            <div className="form-group">
            <input type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Please enter First Name"
                    onChange={this.onChange}/>
                    </div>
            <label htmlFor="lastName">Last Name</label>
            <div className="form-group">
            <input type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Please enter Last Name"
                    onChange={this.onChange}/>
                    </div>
            <label htmlFor="email">Email address</label>
            <div className="form-group">
            <input type="email"
                    className="form-control"
                    id="email"
                    placeholder="Please enter email"
                    onChange={this.onChange}/>
                    </div>
            <label htmlFor="password">Password</label>
            <div className="form-group">
            <input type="password"
                    className="form-control"
                    id="password"
                    placeholder="Please enter password"
                    onChange={this.onChange}/>
                    </div>
            <br/>
            <button type="submit" className="btn btn-primary submit" id="signupBtn" onClick={this.localSignup}>Sign Up</button>
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

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignup: (credentials) => {dispatch(localSignup(credentials)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

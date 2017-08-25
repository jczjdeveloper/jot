import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

// Import CSS styling
import './Login.css'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container loginFullWrapper">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-primary">
            <div className="panel-heading" id="formHeader">LOGIN</div>

              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Please enter email" onChange={this.onChange}/>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Please enter password" onChange={this.onChange}/>
              <br />
              <button type="submit" className="btn btn-primary submit" id="loginBtnl" >Login</button>
              <br />
              <Link to ="/signup">
              <button type="submit" className="btn btn-default submit" id="signupBtnl">Don't have an account yet? Sign up here!</button>
              </Link>
              <Link to ="/">
              <button type="submit" className="btn btn-default submit" id="homeBtnl">Back to home</button>
              </Link>

          </div>

        </div>
      </div>

    );
  }
}

Login.propTypes = {};

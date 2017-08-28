import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

// Import CSS styling
import './Login.css'

// Import component Actions
import {localLogin} from '../Actions/User';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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

    localLogin = (e) => {
      if (this.state.email == "" || this.state.password == "") {
      // this.setState({
      //   notification: this.props.notification
      // });
      //console.log("Eror! email or password is empty!");
      // console.log(this.props.notification);
      // this.props.userNotification("Please enter your login details.");
      e.preventDefault();
      } else {
        this.props.localLogin(this.state);
      }
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
              <button type="submit" className="btn btn-primary submit" id="loginBtnl" onClick={this.localLogin} >Login</button>
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

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    // getUser: () => {dispatch(getUser())},
    //updateUser: (user) => {dispatch(updateUser(user))},
    localLogin: (credentials) => {dispatch(localLogin(credentials))},
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);

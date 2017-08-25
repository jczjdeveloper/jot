import React, {PropTypes} from 'react';

// Import CSS styling
import './LandingPage.css'

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                </button>
                <p id="logoName">
                  <a className="navbar-brand" href="#">Jot</a>
                </p>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#" id="loginLink">Log In</a>
                  </li>
                  <li>
                    <a href="#" id="signupLink">Sign Up</a>
                  </li>
                </ul>
              </div>{/* /.navbar-collapse */}
            </div>{/* /.container-fluid */}
          </nav>
        </div>

        <div className="row landingPageCover">
          <h1>This is the cover area, insert background image and text</h1>
        </div>

        <div className="row landingPageDescription">
        <div className="row">
          <div className="col-xs-6 col-sm-4">Input content for features</div>
          <div className="col-xs-6 col-sm-4">Input content for features</div>
          <div className="col-xs-6 col-sm-4">Input content for features</div>
        </div>
        </div>

      </div>
    );
  }
}

LandingPage.propTypes = {};

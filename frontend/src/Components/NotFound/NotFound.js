import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

// Import CSS styling
import './NotFound.css'

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid notFoundWrapper">
        <div className="row notFoundDescription">
          <h1>It appears the page you are looking for does not exist!</h1>
          <h4>Click below to go home!</h4>
          <br/>
          <Link to="/">
            <button type="submit" className="btn btn-default submit" id="notFoundBackToHome">Back to Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

NotFound.propTypes = {};

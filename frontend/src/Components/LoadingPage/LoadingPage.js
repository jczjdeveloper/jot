import React, {PropTypes} from 'react';

// Import CSS styling
import './LoadingPage.css'

export default class LoadingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row"  id="loadingText">
          <h1>Loading...</h1>
        </div>

        <div className="row">
          <div className="cssload-loader">

            <div className="cssload-flipper">
              <div className="cssload-front"/>
              <div className="cssload-back"/>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

LoadingPage.propTypes = {};

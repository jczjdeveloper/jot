import React, {PropTypes} from 'react';

// Import CSS styling
import './Dashboard.css';

// Import other components
import Tasklist from '../Tasklist/Tasklist';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/*Start of SidebarNav*/}
          <div className="col-md-2 sidebarNav">
            <h1 id="sidebarNavHeader">Navigation</h1>
            <hr/>
            <ul>
              <li className="sidebarNavListItem">
                <a id="tasklistAll" onClick={this.onClick}><i className="fa fa-fw fa-file-text-o fa-lg"/>
                  All
                </a>
              </li>
              <li className="sidebarNavListItem">
                <a id="tasklistOutstanding" onClick={this.onClick}><i className="fa fa-fw fa-exclamation-circle fa-lg"/>
                  Outstanding
                </a>
              </li>
              <li className="sidebarNavListItem">
                <a id="tasklistCompleted" onClick={this.onClick}><i className="fa fa-fw fa-check-circle fa-lg"/>
                  Completed
                </a>
              </li>
              <li className="sidebarNavListItem">
                <a id="userAccount" onClick={this.onClick}><i className="fa fa-fw fa-user fa-lg"/>
                  Account
                </a>
              </li>
              <li className="sidebarNavListItem">
                <a id="logout" onClick={this.onClick}><i className="fa fa-fw fa-sign-out fa-lg"/>
                  Logout
                </a>
              </li>
            </ul>
          </div>
          {/*End of SidebarNav*/}

          {/*Start of main tasklist area*/}
          <div className="col-md-6 tasklistArea">
            <Tasklist />

          </div>
          {/*End of main tasklist area*/}

          {/*Start of taskItem Description*/}
          <div className="col-md-4 taskItemDescription">
            <h1>taskItem Description Area</h1>
          </div>
          {/*End of taskItem Description*/}

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {};

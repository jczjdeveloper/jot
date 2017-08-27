import React, {PropTypes} from 'react';

// Import CSS styling
import './TasklistHeader.css';

export default class TasklistHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 tasklistHeaderRow">
        <h3 id="tasklistCurrent">All/Oustanding/Completed depending on nav.</h3>
        <input type="text" className="form-control" id="inputTask" placeholder="Add Task, press 'Enter' to save."  onChange={this.onChange}/>
        </div>
      </div>
    );
  }
}

TasklistHeader.propTypes = {
};

import React, {PropTypes} from 'react';

export default class TaskItemDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <h3>TaskItemTitle</h3>
        <h5>Task Item Description gets populated here.</h5>

        <button type="submit" className="btn btn-primary submit" id="updateTaskItemBtn" >Update</button>
      </div>
    );
  }
}

TaskItemDescription.propTypes = {};

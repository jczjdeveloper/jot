import React, {PropTypes} from 'react';

// Import CSS styling
import './Tasklist.css'

// Import other components
import TasklistHeader from '../TasklistHeader/TasklistHeader';
import TasklistContent from '../TasklistContent/TasklistContent';

export default class Tasklist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
          <TasklistHeader />
          <TasklistContent />
      </div>
    );
  }
}

Tasklist.propTypes = {
};

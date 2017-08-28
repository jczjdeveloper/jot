import React, {PropTypes} from 'react';

// Import CSS styling
import './TasklistContent.css';

export default class TasklistContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="taskItemRow">
          <p className="taskItemTitle">
            <input type="checkbox" name="checkboxes" id="taskItemCheckbox"/>
            Enter task title here. etc etc etc etc etc etc etc etc etc etc etc etc etc etcetc etc etc etcetc etc etc etcetc etc etc etcetc etc etc
          </p>

          {/* START of taskItemDropdownEdit */}
          <div className="btn-group" role="group">
            <button className="taskItemDropdownEdit" type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              ...
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Edit</a>
              </li>
              <li>
                <a href="#">Delete</a>
              </li>
            </ul>
          </div>
          {/* END of taskItemDropdownEdit */}
        </div>

      </div>
    );
  }
}

TasklistContent.propTypes = {};
// <button type="button" className="btn btn-default">1</button>
// <button type="button" className="btn btn-default">1</button>
// <span className="caret"/>

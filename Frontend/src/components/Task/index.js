import {Link, useParams} from "react-router-dom";
import './style.scss'
import Spinner from "../Spinner";
import PropTypes from "prop-types";

function Task({tasks}) {
  const {taskId} = useParams();

  const task = tasks.find(task => task.id === parseInt(taskId,10));

  return task ? (
    <div className="task">
      <h1 className="task-title">{task.title}</h1>
      <p className="task-description">{task.description}</p>
      <Link to="/" className="task-link">Back to tasks</Link>
    </div>
  ) : (
    <Spinner />
  );
}

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
}

export default Task;

import Item from "./Item";
import './style.scss';
import PropTypes from "prop-types";
import {Outlet} from "react-router-dom";

function List({tasks, toggleDone}) {
  return (
    <ul className="list">
      {
        tasks.map(task =>
          <Item key={task.id} toggleDone={toggleDone} {...task} />
        )
      }
      <Outlet />
    </ul>
  );
}

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
  toggleDone: PropTypes.func.isRequired,
};

export default List;

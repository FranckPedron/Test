import Item from "./item";
import './style.scss';
import PropTypes from "prop-types";

function List({tasks, toggleDone}) {
  return (
    <ul className="list">
      {
        tasks.map(task =>
          <Item key={task.id} toggleDone={toggleDone} {...task} />
        )
      }
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

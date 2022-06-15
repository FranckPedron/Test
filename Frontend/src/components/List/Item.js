import PropTypes from "prop-types";
import {useState} from "react";
import {Link} from "react-router-dom";

function Item({id, title, done, toggleDone }) {
  const link = `/tasks/${id}`

  const handleChange = () => {
    toggleDone(id);
  };

  return (
    <li>
      <label className={`list-item ${done ? 'list-item--done' : ''}`} >
        <input type="checkbox" checked={done} onChange={handleChange} />
        <Link to={link}>
          {title}
        </Link>
      </label>
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Item;

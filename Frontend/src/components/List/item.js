import PropTypes from "prop-types";
import {useState} from "react";

function Item({id, title, done, toggleDone}) {

  const handleChange = () => {
  toggleDone(id);
  };

  return (
      <li>
        <label className={`list-item ${done ? 'list-item--done' : ''}`}>
          <input type="checkbox" checked={done} onChange={handleChange}/>
          {title}
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

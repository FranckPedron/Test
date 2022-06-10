import PropTypes from "prop-types";

function Item({title, done}) {
  return (
      <li>
        <label className={`list-item ${done ? 'list-item--done' : ''}`}>
          <input type="checkbox" checked={done}/>
          {title}
        </label>
      </li>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Item;

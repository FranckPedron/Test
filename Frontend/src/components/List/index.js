import Item from "./item";
import './style.scss';

function List() {
  return (
    <ul className="list">
      <Item done title="List my TODOs" />
      <Item title="Change a TODO state" />
      <Item title="Detail a TODO" />
      <Item title="Add a new TODO" />
      <Item title="Configure Dockerfile and Docker-Compose" />
    </ul>
  );
}

export default  List;

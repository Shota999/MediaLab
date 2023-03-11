import "./header.scss";
import { Link } from 'react-router-dom';

const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((menu) => (
        <li key={menu.id}>
          <Link to="#">{menu.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

import "./header.scss";
import { Link, NavLink } from 'react-router-dom';

const Menu = ({ menu, scrollTop }) => {
  return (
    <ul>
      {menu.map((menu) => (
        <li key={menu.id} onClick={scrollTop}>
          <NavLink to={menu.path}>{menu.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

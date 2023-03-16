import "./header.scss";
import { Link, NavLink } from 'react-router-dom';

const Menu = ({ menu, scrollTop }) => {
  return (
    <ul>
      {menu.map((menu) => (
        <li key={menu.id} onClick={scrollTop}>
          <NavLink to={"/" + menu.slug}>{menu.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

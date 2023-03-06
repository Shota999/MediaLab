import "./header.scss";

const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((menu) => (
        <li key={menu.id}>
          <a href="#">{menu.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

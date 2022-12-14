import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="movies"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);
  return (
    <>
      <div className={s.header}>
        <nav>
          <ul className={s.list}>
            <li className={s.link}>
              <NavLink to="/" className={buildLinkClass}>
                <IoIosHome className={s.icon} />
                Home
              </NavLink>
            </li>
            <li className={s.link}>
              <NavLink to="/movies" className={buildLinkClass}>
                <MdLocalMovies className={s.icon} />
                Movies
              </NavLink>
              <NavLink to="/movies/:movieId"> </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;

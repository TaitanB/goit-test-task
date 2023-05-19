import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

export const Header = () => {
  return (
    <header id="Header" className={css.header}>
      <div className={css.nav}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/tweets" className={css.navLink}>
          Tweets
        </NavLink>
      </div>
    </header>
  );
};

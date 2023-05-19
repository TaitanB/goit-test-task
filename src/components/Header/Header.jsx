import { Link, NavLink } from "react-router-dom";
import pictureLogo from "../../assets/pictureLogo.svg";

import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      <Link to="/">
        <img src={pictureLogo} alt="pictureLogo" className={css.img} />
      </Link>
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

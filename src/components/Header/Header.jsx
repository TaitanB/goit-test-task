import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header id="Header">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
      </div>
    </header>
  );
};

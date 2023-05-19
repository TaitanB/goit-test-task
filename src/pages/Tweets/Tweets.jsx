import { NavLink } from "react-router-dom";
import { MdOutlineDoubleArrow } from "react-icons/md";

import UserList from "../../components/UsersList/UsersList";

import css from "./Tweets.module.css";

export default function Tweets() {
  return (
    <div className={css.tweetsContainer}>
      <NavLink to="/" className={css.goBack}>
        <MdOutlineDoubleArrow className={css.iconBack} size={30} />
      </NavLink>
      <UserList />
    </div>
  );
}

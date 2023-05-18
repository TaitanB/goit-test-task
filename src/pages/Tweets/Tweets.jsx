import UserList from "../../components/UsersList/UsersList";
import Selected from "../../components/Selected/Selected";
import { NavLink } from "react-router-dom";

export default function Tweets() {
  return (
    <>
      <NavLink to="/">Go back</NavLink>
      {/* <Selected /> */}
      <UserList />
    </>
  );
}

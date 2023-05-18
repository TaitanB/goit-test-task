import React, { useState, useEffect } from "react";
import css from "./usersList.module.css";
import UserCard from "../UserCard/UserCard";
import { fetchUsers } from "../../api";
import Selected from "../Selected/Selected";

export default function UsersList() {
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [followCheck, setFollowCheck] = useState("");
  const limit = 3;

  useEffect(() => {
    const getUsers = async ({ page, limit, selected }) => {
      try {
        return await fetchUsers(page, limit, selected).then((data) => {
          console.log(`data.length =>`);
          console.log(data.length);
          if (data && data.length < limit) {
            setShowLoadMoreBtn(false);
          } else {
            setShowLoadMoreBtn(true);
          }

          setUsers([...users, ...data]);
          console.log(`setUsers =>`);
          console.log(users);
        });
      } catch (error) {
        console.error(error);
      }
    };

    getUsers({ page: pageNumber, limit: limit, selected: followCheck });
    console.log(`getUsers =>`);
    console.log(users);
  }, [pageNumber, followCheck]);

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleChangeFollowCheck = (value) => {
    setFollowCheck(value);
  };

  return (
    <>
      <Selected
        handleChange={handleChangeFollowCheck}
        setPageNumber={setPageNumber}
        setUsers={setUsers}
      />
      <ul className={css.usersList}>
        {users &&
          users.length > 0 &&
          users.map((user) => <UserCard key={user.id} user={user} />)}
      </ul>
      {showLoadMoreBtn && (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
      {users.length > limit && <a href="#Header">Up</a>}
    </>
  );
}

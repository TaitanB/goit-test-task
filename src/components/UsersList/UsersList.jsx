import React, { useState, useEffect } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";

import { fetchUsers } from "../../api";

import UserCard from "../UserCard/UserCard";
import Selected from "../Selected/Selected";
import LoadMore from "../LoadMore/LoadMore";

import css from "./usersList.module.css";

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
          if (data && data.length < limit) {
            setShowLoadMoreBtn(false);
          } else {
            setShowLoadMoreBtn(true);
          }

          setUsers([...users, ...data]);
        });
      } catch (error) {
        console.error(error);
      }
    };

    getUsers({ page: pageNumber, limit: limit, selected: followCheck });
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
      {showLoadMoreBtn && <LoadMore handleLoadMore={handleLoadMore} />}
      {users.length > limit && (
        <a href="#Header" className={css.upBtn}>
          <MdOutlineDoubleArrow className={css.iconUp} />
        </a>
      )}
    </>
  );
}

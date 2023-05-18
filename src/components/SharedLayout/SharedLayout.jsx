import { Header } from "../../components/Header/Header";
import React, { Suspense } from "react";
import { Outlet } from "react-router";
import picture from "../../assets/picture.png";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={<img src={picture} alt="Loading..." className={css.loader} />}
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

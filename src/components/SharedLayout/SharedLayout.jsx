import React, { Suspense } from "react";
import { Outlet } from "react-router";

import { Header } from "../../components/Header/Header";
import Loader from "../Loader/Loader";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;

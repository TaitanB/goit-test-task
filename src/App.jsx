import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SharedLayout = lazy(() =>
  import("./components/SharedLayout/SharedLayout")
);
const HomePage = lazy(() => import("./pages/Home/Home"));
const TweetsPage = lazy(() => import("./pages/Tweets/Tweets"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { YourLibrary } from "../pages/YourLibrary";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="search/:saerchTerm" element={<Search />} />
        <Route path="library" element={<YourLibrary />} />
      </Route>
    </Routes>
  );
};

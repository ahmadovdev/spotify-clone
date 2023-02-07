import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const MainLayout = () => {
  return (
    <React.Fragment>
      <SideBar />
      <Outlet/>
    </React.Fragment>
  );
};

export default MainLayout;

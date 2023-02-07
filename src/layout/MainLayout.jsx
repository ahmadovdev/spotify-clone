import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import SideBar from "../components/SideBar";
import { Wrapper } from "./style";

const MainLayout = () => {
  return (
    <React.Fragment>
      <Wrapper>
      <SideBar />
      <Header />    
      <Outlet/>
      </Wrapper>
    </React.Fragment>
  );
};

export default MainLayout;

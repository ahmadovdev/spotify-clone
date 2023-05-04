import React from "react";
import { Container, MainWrapper, SidebarWrapper } from "./style.js";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <Container>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <MainWrapper>
        <Header />
        <Outlet />
      </MainWrapper>
    </Container>
  );
};

export default MainLayout;

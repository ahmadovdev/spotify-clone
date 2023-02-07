import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import SideBar from "../components/SideBar";
import { Main, Wrapper } from "./style";

const MainLayout = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <SideBar />
        <Main.Wrapper>
          <Main>
            <Header />
            <Outlet />
          </Main>
        </Main.Wrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default MainLayout;

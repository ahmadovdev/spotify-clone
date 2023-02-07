import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container,  Menu, Wrapper } from './style';
import {
  UilHome,
  UilSearch,
  UilMusic,
  UilPlusSquare,
  UilHeart,
} from "@iconscout/react-unicons";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Menu.Item>
            <NavLink
              to={"home"}
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              <UilHome />
              <p>Home</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              to={"search"}
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              <UilSearch />
              <p>Search</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={"library"}>
              <UilMusic />
              <p>Your Library</p>
            </NavLink>
          </Menu.Item>
        </Menu>
        <Menu>
          <Menu.Item>
            <NavLink to={"playlist"}>
              <UilPlusSquare />
              <p>Create Playlist</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={"liked"}>
              <UilHeart />
              <p>Liked Songs</p>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

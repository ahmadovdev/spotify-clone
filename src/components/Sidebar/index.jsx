import React from "react";
import { Navbar, NavbarItem, NavbarItemLinkName, NavbarItems } from "./style";
import { NavLink } from "react-router-dom";
import {
  UilHome,
  UilSearch,
  UilMusic,
} from "@iconscout/react-unicons";

const Sidebar = () => {
  return (
    <Navbar>
      <NavbarItems>
        <NavbarItem>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            <UilHome />
            <NavbarItemLinkName>Home</NavbarItemLinkName>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to={"search"}>
            <UilSearch />
            <NavbarItemLinkName>Search</NavbarItemLinkName>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to={"library"}>
            <UilMusic />
            <NavbarItemLinkName>Your Library</NavbarItemLinkName>
          </NavLink>
        </NavbarItem>
      </NavbarItems>
    </Navbar>
  );
};

export default Sidebar;

import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #121212;
  width: 350px;
  height: 100vh;
  border-radius: 10px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;


const NavbarItems = styled.ul`
  padding: 8px 12px;
  list-style: none;
`;

const NavbarItem = styled.li`
  padding: 4px 12px;
  & a {
    display: flex;
    align-items: center;
    gap: 16px;
    height: 40px;
  }
  a:hover {
    color: #fff;
    transition: 1s all;
  }
`;

const NavbarItemLinkName = styled.span`
  font-size: 1rem;
`;

export { Navbar, NavbarItems, NavbarItem, NavbarItemLinkName };

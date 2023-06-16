import React from "react";
import { NavLink } from "react-router-dom";
import { UilHome, UilSearch, UilMusic } from "@iconscout/react-unicons";

const links = [
  {
    name: "Home",
    to: "/",
    icon: UilHome,
  },
  {
    name: "Search",
    to: "search",
    icon: UilSearch,
  },
  {
    name: "YourLibrary",
    to: "library",
    icon: UilMusic,
  },
];
const Sidebar = () => {
  return (
    <nav className="bg-[#121212] h-screen min-w-[232px] rounded-lg sticky top-0 left-0 right-0">
      <ul className="py-2 px-3 list-none">
        <li className="py-1 px-3 text-slate-400">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                "h-10 flex gap-3 items-center text-lg font-semibold hover:text-cyan-400 " +
                (isActive ? "text-slate-50" : "text-slate-400")
              }
            >
              <item.icon />
              {item.name}
            </NavLink>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;


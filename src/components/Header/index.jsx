import React from "react";
import { UilAngleRight, UilAngleLeft } from "@iconscout/react-unicons";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";

const Header = () => {
  const location = useLocation().pathname
  return (
    <header className="h-16 flex px-8 sticky top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur rounded-t-lg z-10">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3">
          <div className="flex items-center cursor-pointer text-slate-50 bg-black rounded-full">
            <UilAngleLeft />
          </div>
          <div className="flex items-center cursor-pointer text-slate-50 bg-black rounded-full">
            <UilAngleRight />
          </div>
        </div>
        <div>{location.slice(1, 7) === "search" ? <SearchBar /> : null}</div>
        <div className="flex gap-4">
          <button className="px-8 py-2 rounded-full border-none cursor-pointer bg-slate-50 text-black">
            Sign up
          </button>
          <button className="px-8 py-2 rounded-full border-none cursor-pointer bg-black text-slate-50  font-semibold">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

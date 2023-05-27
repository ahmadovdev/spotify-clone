import React from "react";
import { UilAngleRight, UilAngleLeft } from "@iconscout/react-unicons";

const Header = () => {
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
        <div className="flex gap-4">
          <button className="px-8 py-2 rounded-full border-none cursor-pointer bg-slate-50 text-black font-semibold">
            Sign up
          </button>
          <button className="px-8 py-2 rounded-full border-none cursor-pointer bg-slate-50 text-black font-semibold">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

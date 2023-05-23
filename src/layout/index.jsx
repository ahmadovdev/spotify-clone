import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-5 gap-2 h-full min-h-0 bg-yellow-500">
      <div>
        <Sidebar />
      </div>
      <div className="bg-[#121212] rounded-lg col-span-4">
        <Header />
        <div className="max-w-[1955px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
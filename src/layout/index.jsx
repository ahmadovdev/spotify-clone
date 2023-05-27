import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <main className="grid grid-cols-[auto,1fr] gap-2 h-full min-h-0 bg-yellow-500">
      <div className="md:w-[420px]">
        <Sidebar />
      </div>
      <div className="bg-[#121212] rounded-lg">
        <Header />
        <div className="max-w-[1955px] px-6">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
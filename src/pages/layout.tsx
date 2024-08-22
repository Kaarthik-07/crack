import React from "react";
import Nav from "../components/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[738px] md:max-w-[1024px] lg:max-w-[1366px]">
      <div>
        <Nav />
      </div>
      <div className="h-full ml-auto mr-auto pl-5 pr-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

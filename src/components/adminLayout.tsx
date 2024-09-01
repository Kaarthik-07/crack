import React from "react";
import SideNavAdmin from "../components/sideNavAdmin";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SideNavAdmin />
      <div className="flex-1 p-7 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;

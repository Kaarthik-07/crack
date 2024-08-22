import React from "react";
import Nav from "./navbar.js";
import Footer from "./footer.js";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

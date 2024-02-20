import React from "react";
import Header2 from "./Header2";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header2 />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

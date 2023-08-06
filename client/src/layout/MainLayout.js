import React from "react";
import SideBar from "./SideBar";

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex ">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="dashMain ">{children}</div>
    </div>
  );
};

export default MainLayout;

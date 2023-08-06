import React from "react";

import { BiMenu } from "react-icons/bi";

const SideMenu = () => {
  return (
    <div className="sidebar">
      <div>
        <BiMenu size={30} className="menuIcon" />
      </div>
      <div className=" mt-5 d-flex flex-column align-items-center mb-5">
        <div>
          <img
            className="proImg"
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt=""
          />
        </div>
        <p>Name: </p>
      </div>
      <div className="sidebarMain ms-3">
        <div className="bookList">
          <p className="fw-bold">Book Details</p>
          <ul>
            <li>Books</li>
            <li>My Book</li>
            <li>Add Book</li>
            <li>Transaction</li>
          </ul>
        </div>
        <div className="profile">
          <p className="fw-bold">Profile</p>
          <ul>
            <li>Update Profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

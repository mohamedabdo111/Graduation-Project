import React from "react";
import { Link, useLocation } from "react-router-dom";

const Ownersidebar = () => {
  const pathName = useLocation();
  return (
    <div
      className="bg-white py-3 px-6 rounded-md shadow-lg md:shadow-none"
      style={{ height: "80vh" }}
    >
      <h1 className="my-4 text-gray-400 ">MENU</h1>

      <Link
        className={`flex items-center gap-3 mt-4 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/owner/dashboard" ? " bg-gray-100" : null
        }`}
        to={"/owner/dashboard"}
      >
        <div className="w-8 h-8 rounded-md bg-dash"></div>
        <h1>Dashboard</h1>
      </Link>
      <Link
        to={"/owner/notification"}
        className={`flex items-center gap-3 mt-4 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/owner/notification" ? " bg-gray-100" : null
        }`}
      >
        <div className="w-8 h-8 rounded-md bg-notifi font-medium"></div>
        <h1>Notification</h1>
      </Link>

      <Link
        to={"/owner/flat"}
        className={`flex items-center gap-3 mt-4 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/owner/flat" ? " bg-gray-100" : null
        }`}
      >
        <div className="w-8 h-8 rounded-md bg-flat font-medium"></div>
        <h1>Flat</h1>
      </Link>
      <Link
        to={"/owner/update-password"}
        className={`flex items-center gap-3 mt-4 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/owner/update-password" ? " bg-gray-100" : null
        }`}
      >
        <div className="w-8 h-8 rounded-md bg-pass font-medium"></div>
        <h1>Password</h1>
      </Link>
      <Link
        to={"/owner/user"}
        className={`flex items-center gap-3 mt-4 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/owner/user" ? " bg-gray-100" : null
        }`}
      >
        <div className="w-8 h-8 rounded-md bg-user font-medium"></div>
        <Link>
          <h1>User</h1>
        </Link>
      </Link>
      <Link
        to={"/owner/update-profile"}
        className={`flex items-center gap-3 mt-4 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/owner/update-profile" ? " bg-gray-100" : null
        }`}
      >
        <div className="w-8 h-8 rounded-md bg-editprof font-medium"></div>
        <h1>Edit Profile</h1>
      </Link>
    </div>
  );
};

export default Ownersidebar;

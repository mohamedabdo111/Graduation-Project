import React from "react";
import { Link, useLocation } from "react-router-dom";

const Adminsidebars = () => {
  const pathName = useLocation();
  return (
    <div
      className="bg-white py-3 px-6 rounded-md shadow-lg md:shadow-none"
      style={{ height: "80vh" }}
    >
      <h1 className="my-4 text-gray-400 ">MENU</h1>

      <Link
        className={`flex items-center gap-3 mt-6 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/admin/dashboard" ? " bg-gray-100" : null
        }`}
        to={"/admin/dashboard"}
      >
        <div className="w-8 h-8 rounded-md bg-dash"></div>

        <h1>Dashboard</h1>
      </Link>
      <Link
        className={`flex items-center gap-3 mt-4 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/admin/notification" ? " bg-gray-100" : null
        }`}
        to={"/admin/notification"}
      >
        <div className="w-8 h-8 rounded-md bg-notifi font-medium"></div>

        <h1>Notification</h1>
      </Link>

      <Link
        to={"/admin/update-password"}
        className={`flex items-center gap-3 mt-4 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/admin/update-password" ? " bg-gray-100" : null
        }`}
      >
        <div className="w-8 h-8 rounded-md bg-pass font-medium"></div>

        <h1>Password</h1>
      </Link>
      <Link
        to={"/admin/users"}
        className={`flex items-center gap-3 mt-4 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/admin/users" ? " bg-gray-100" : null
        }`}
      >
        <div className="w-8 h-8 rounded-md bg-user font-medium"></div>
        <h1>User</h1>
      </Link>
      <Link
        to={"/admin/update-profile"}
        className={` flex items-center gap-3 mt-4 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/admin/update-profile" ? " bg-gray-100" : null
        } `}
      >
        <div className="w-8 h-8 rounded-md bg-editprof font-medium"></div>
        <h1>Edit Profile</h1>
      </Link>
      <Link
        to={"/admin/pending"}
        className={`flex items-center gap-3 mt-4 p-2 hover:bg-gray-100 rounded-md ${
          pathName.pathname === "/admin/pending" ? " bg-gray-100" : null
        }`}
      >
        <div className="w-8 h-8 rounded-md bg-zinc-700 font-medium"></div>

        <h1>Pending</h1>
      </Link>
    </div>
  );
};

export default Adminsidebars;

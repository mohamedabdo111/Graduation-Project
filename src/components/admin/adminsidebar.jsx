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

      <div className=" flex items-center gap-3 mt-9">
        <div className="w-8 h-8 rounded-md bg-dash"></div>
        <Link to={"/admin/dashboard"}>
          <h1>Dashboard</h1>
        </Link>
      </div>
      <div className=" flex items-center gap-3 mt-6">
        <div className="w-8 h-8 rounded-md bg-notifi font-medium"></div>
        <Link to={"/admin/notification"}>
          <h1>Notification</h1>
        </Link>
      </div>

      <div className=" flex items-center gap-3 mt-6">
        <div className="w-8 h-8 rounded-md bg-pass font-medium"></div>
        <Link to={"/admin/update-password"}>
          <h1>Password</h1>
        </Link>
      </div>
      <div className=" flex items-center gap-3 mt-6">
        <div className="w-8 h-8 rounded-md bg-user font-medium"></div>
        <Link to={"/admin/users"}>
          <h1>User</h1>
        </Link>
      </div>
      <div className=" flex items-center gap-3 mt-6">
        <div className="w-8 h-8 rounded-md bg-editprof font-medium"></div>
        <Link to={"/admin/update-profile"}>
          <h1>Edit Profile</h1>
        </Link>
      </div>
      <div className=" flex items-center gap-3 mt-6">
        <div className="w-8 h-8 rounded-md bg-zinc-700 font-medium"></div>
        <Link to={"/admin/pending"}>
          <h1>Pending</h1>
        </Link>
      </div>
    </div>
  );
};

export default Adminsidebars;

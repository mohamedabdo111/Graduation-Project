import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RequierBack = () => {
  if (localStorage.getItem("token")) {
    var token = localStorage.getItem("token");
  }
  return token ? window.history.back() : <Outlet></Outlet>;
};

export default RequierBack;

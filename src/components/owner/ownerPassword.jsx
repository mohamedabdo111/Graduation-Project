import React from "react";
import UpdatePasswordHook from "../../hookPages/updatePassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Buttondash from "../fixed/buttondash";

const OwnerPassword = ({ clicker }) => {
  const [
    password,
    confirmPassword,
    onChangeConfirmPassword,
    onChangePassword,
    onSubmit,
    onChangeNewPassword,
    newpassword,
  ] = UpdatePasswordHook();

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var role = JSON.parse(localStorage.getItem("UserInf")).role;
  }

  return (
    <div>
      <div className=" flex justify-between items-center">
        <div>
          <h1 className="head-dash text-xl">Change Password</h1>
          <div className="color-dash bg-pass"></div>
        </div>

        {role === "User" ? null : <Buttondash clicker={clicker}></Buttondash>}
      </div>

      <div className=" w-[100%] md:w-[50%] mt-9">
        <div>
          <label className="font-semibold block">Old Password</label>
          <input
            id="oldpass"
            type="password"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold block">New Password</label>
          <input
            id="newpass"
            type="password"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
            value={newpassword}
            onChange={onChangeNewPassword}
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold block">Confirm New Password</label>
          <input
            id="confirmpass"
            type="password"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
        </div>

        <div className=" text-center">
          <button
            className="bg-pass w-[100px] p-3 rounded-md mt-6 text-white "
            onClick={onSubmit}
          >
            Save
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default OwnerPassword;

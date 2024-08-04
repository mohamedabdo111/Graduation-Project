import React from "react";
import img from "../../images/user login.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OwnerGetProfileInfoHook from "../../hookPages/ownerGetProfileInfoHook";
import Buttondash from "../fixed/buttondash";

const OwnerEditProf = ({ clicker }) => {
  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var id = JSON.parse(localStorage.getItem("UserInf")).userId;
  } else {
    id = "";
  }
  const [
    onChangeUserName,
    onChangeEmail,
    onChangePhone,
    onChangeImage,
    onSubmit,
    mail,
    username,
    phone,
    imageVal,
    loading,
    loadingSubmit,
  ] = OwnerGetProfileInfoHook(id);

  return (
    <div>
      <div className=" flex justify-between items-center">
        <div>
          <h1 className="head-dash text-xl">Edit Profile</h1>
          <div className="color-dash bg-editprof"></div>
        </div>

        <Buttondash clicker={clicker}></Buttondash>
      </div>

      <div className=" w-[100%] md:w-[90%] mt-9 grid grid-cols-12 m-auto">
        <div className=" col-span-12 sm:col-span-6">
          <div className="mt-6">
            <label className="font-semibold block">UserName</label>
            <input
              id="Username"
              type="text"
              className="p-2  bg-transparent rounded-lg w-full border border-black"
              value={username}
              onChange={onChangeUserName}
            />
          </div>
          <div className="mt-6">
            <label className="font-semibold block">Email</label>
            <input
              id="email"
              type="email"
              className="p-2  bg-transparent rounded-lg w-full border border-black"
              value={mail}
              onChange={onChangeEmail}
            />
          </div>
          <div className="mt-6">
            <label className="font-semibold block">Phone Number</label>
            <input
              id="phone"
              type="phone"
              className="p-2  bg-transparent rounded-lg w-full border border-black"
              value={phone}
              onChange={onChangePhone}
            />
          </div>
          <div className="p-2 hidden md:block  bg-transparent rounded-lg w-full text-center mt-6">
            <button
              className="btns border border-editprof text-editprof hover:text-white hover:bg-editprof duration-100"
              onClick={onSubmit}
            >
              Save
            </button>
          </div>
        </div>
        {/* imageprof */}
        <div className="  col-span-12 sm:col-span-6 text-center mt-6 ">
          <img
            src={imageVal === null ? img : imageVal}
            alt="img"
            className="imgreg rounded-full outline outline-white outline-4 m-auto object-cover"
            property="lazy"
          ></img>
          <button className=" p-3 bg-dash text-black rounded-2xl mt-5  relative cursor-pointer ">
            Change Profile Pic
            <input
              type="file"
              accept="image/*"
              className=" absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={onChangeImage}
            />
          </button>
          {/* make input file foucse in image not button */}
        </div>

        <div className="p-2 col-span-12 block md:hidden  bg-transparent rounded-lg w-full text-center mt-6">
          <button
            className="btns border border-editprof text-editprof hover:text-white hover:bg-editprof mx-auto duration-100"
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

export default OwnerEditProf;

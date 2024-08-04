import React from "react";
import img from "../../images/image.png";
import logo from "../../images/Group11.png";
import male from "../../images/male.png";
import female from "../../images/female.png";
import { Link } from "react-router-dom";
import RegisterHook from "../../hookPages/registerHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../fixed/Loading";
const Register = () => {
  const [
    onChangeUserName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfrimPass,
    onChangeGender,
    onChangeUserType,
    username,
    email,
    Phone,
    password,
    confirmPass,
    gender,
    userType,
    submit,
    isPress,
    loading,
  ] = RegisterHook();
  return (
    <div className=" grid grid-cols-12 gap-4 bg-login">
      {isPress ? (
        loading ? (
          <div className=" absolute top-[50%] left-[50%] positi p-7">
            <Loading></Loading>
          </div>
        ) : null
      ) : null}
      <div className=" hidden md:block md:col-span-5  lg:col-span-6 m-auto">
        <img src={img} alt="vector" className=" w-[450px]" />
      </div>
      <div className=" col-span-12 sm:col-span-12 w-[90%] mx-auto md:col-span-7 lg:col-span-5  border  my-8  md:mx-8 p-2 text-center bg-white rounded-md min-h-[640px]  ">
        <h1 className="head-dash text-xl my-9">Create an account</h1>
        <img src={logo} alt="logo" className=" m-auto my-9"></img>

        <div className=" w-full my-7">
          <input
            type="text"
            placeholder="User Name"
            className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
            value={username}
            onChange={onChangeUserName}
          ></input>
          <div className=" w-full my-7">
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
              value={email}
              onChange={onChangeEmail}
            ></input>
          </div>
          <div className=" w-full my-7">
            <input
              type="number"
              placeholder="Phone number"
              className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
              value={Phone}
              onChange={onChangePhone}
            ></input>
          </div>
          <div className=" w-full my-7">
            <input
              type="password"
              placeholder="Password"
              className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
              value={password}
              onChange={onChangePassword}
            ></input>
          </div>
          <div className=" w-full my-7">
            <input
              type="password"
              placeholder="Confirm password"
              className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
              value={confirmPass}
              onChange={onChangeConfrimPass}
            ></input>
          </div>

          <div className=" flex justify-center  gap-12 my-6">
            <div className=" flex flex-row-reverse items-center gap-2">
              <input
                type="radio"
                for="male"
                id="male"
                name="gender"
                value="male"
                onChange={onChangeGender}
              ></input>
              <img
                src={male}
                alt="male"
                className="imgreg"
                id="male"
                name="one"
              ></img>
            </div>
            <div className=" flex flex-row-reverse items-center gap-2">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={onChangeGender}
              ></input>
              <img src={female} alt="female"></img>
            </div>
          </div>

          <div className="my-6">
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1.5 w-[80%] p-2 border rounded-lg border-gray-300 text-gray-700 sm:text-sm"
              onChange={onChangeUserType}
            >
              <option value="none">User Type</option>
              <option value="owner">Owner</option>
              <option value="user"> User</option>
            </select>
          </div>

          <button
            className="bg-links w-[80%] p-2 rounded-md text-white my-7"
            onClick={submit}
          >
            Register
          </button>
          <p className=" font-medium ">
            Already have an account?{" "}
            <Link to="/login" className="text-links">
              Login ...{" "}
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;

import React from "react";
import img from "../../images/VECTOR.jpg";
import google from "../../images/google.png";
import logo from "../../images/Group11.png";
import { Link } from "react-router-dom";
import LoginHook from "../../hookPages/loginHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLoginAction } from "../../redux/actions/AuthAction";

const Login = () => {
  const [email, password, EmailChange, PasswordChange, submit] = LoginHook();
  const dispatch = useDispatch();
  const res = useSelector((item) => item.Auth.login);
  if (res && res.data && res.data.statusCode === 200) {
    localStorage.setItem("UserInf", JSON.stringify(res.data.data));
    localStorage.setItem("token", res.data.data.token);
    window.location.href = "/";
  }
  return (
    <div className=" grid grid-cols-12 gap-4 bg-login">
      <div className=" col-span-12 sm:col-span-12 w-[90%] m-auto md:col-span-7 lg:col-span-5  border mx-2 md:mx-8 my-8 p-2 text-center bg-white rounded-md h-[640px]  ">
        <h1 className=" head-dash text-xl my-10 ">LOGIN</h1>
        <img src={logo} alt="logo" className=" m-auto my-10"></img>

        <div className=" w-full my-10">
          <input
            type="email"
            placeholder="Email Address"
            className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
            value={email}
            onChange={EmailChange}
            required
          ></input>
        </div>
        <div className=" w-full my-10">
          <input
            type="password"
            placeholder="Password"
            className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
            value={password}
            onChange={PasswordChange}
            required
          ></input>
        </div>
        <div>
          <Link to="/email-address" className="links font-semibold my-6">
            Forget Password
          </Link>
        </div>
        <div className=" mx-auto mt-6 cursor-pointer select-none flex justify-center">
          <span>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                dispatch(GoogleLoginAction(credentialResponse.credential));
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </span>
        </div>
        <button
          className="bg-links w-[80%] p-2 rounded-md text-white my-7 select-none"
          onClick={submit}
        >
          Login
        </button>
        <p className=" font-medium my-7">
          Don't have an account?{" "}
          <Link to="/register" className="text-links">
            Register ...{" "}
          </Link>
        </p>
      </div>
      <div className=" hidden md:block md:col-span-5  lg:col-span-6 m-auto">
        <img src={img} alt="vector" />
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;

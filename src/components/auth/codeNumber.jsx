import React from "react";
import Logo from "../../images/Group11.png";
import CodeForgetPassHook from "../../hookPages/codeForgetPassHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CodeNumber = () => {
  const [code, onChangeCode, submit] = CodeForgetPassHook();
  return (
    <div className="bg-white shadow-lg rounded-lg text-center max-w-[820px] mx-5 md:mx-auto my-16">
      <p className=" text-gray-400  text-xl pt-6 px-3 ">Forget Password</p>
      <img src={Logo} alt="Logo" property="lazy" className="mx-auto my-4"></img>

      <div>
        <input
          type="number"
          placeholder="Enter Code"
          className=" w-[80%] md:w-[60%] p-2 outline-none border-2 rounded-lg"
          value={code}
          onChange={onChangeCode}
        ></input>
      </div>

      <button className="btn my-6 w-[200px] bg-btns" onClick={submit}>
        Send
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CodeNumber;

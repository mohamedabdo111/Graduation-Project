import React from "react";
import img from "../../images/user login.png";
import male from "../../images/male.png";
import female from "../../images/female.png";
import { useParams } from "react-router-dom";
import OwnerGetProfileInfoHook from "../../hookPages/ownerGetProfileInfoHook";
import Buttondash from "../fixed/buttondash";

const AdminViewUserInformation = ({ clicker }) => {
  const { id } = useParams();
  const [
    ,
    ,
    ,
    ,
    ,
    mail,
    username,
    phone,
    imageVal,
    loading,
    loadingSubmit,
    univerctiy,
    college,
    views,
    gender,
    role,
    apart,
  ] = OwnerGetProfileInfoHook(id);

  return (
    <div className="my-14 container">
      <div className=" flex justify-between items-center">
        <div className=" my-5">
          <h1 className="head-dash text-xl">User Profile</h1>
          <div className="color-dash bg-notifi"></div>
        </div>

        <Buttondash clicker={clicker}></Buttondash>
      </div>

      <div className=" p-4 md:mx-10 ">
        <div className="flex gap-3 items-center py-3 border-b-4 text-gray-700 ">
          <img
            src={imageVal !== null ? imageVal : img}
            alt="user image"
            className=" rounded-full object-cover"
            style={{ width: "70px", height: "70px" }}
            property="lazy"
          />
          <div>
            <h1 className=" font-semibold text-lg">{username}</h1>
            <p className=" text-gray-600">{role}</p>
          </div>
        </div>
        {/* test */}
        <div className=" w-full col-span-12 md:col-span-6 my-7">
          <input
            type="text"
            placeholder="User Name"
            className=" p-2 w-[100%] md:w-[80%] rounded-lg border-2 border-gray-300"
            value={username}
          ></input>
          <div className=" w-full my-7">
            <input
              type="email"
              placeholder="Email"
              className=" p-2 w-[100%] md:w-[80%]  rounded-lg border-2 border-gray-300"
              value={mail}
            ></input>
          </div>
          <div className=" w-full my-7">
            <input
              type="number"
              placeholder="Phone number"
              className=" p-2 w-[100%] md:w-[80%]  rounded-lg border-2 border-gray-300"
              value={phone}
            ></input>
          </div>

          <div className=" flex justify-center  gap-12 my-6  w-[100%] md:w-[80%] ">
            <label className=" flex flex-row-reverse items-center gap-2 cursor-pointer">
              <input
                type="radio"
                for="male"
                id="male"
                name="gender"
                value="male"
                checked={gender === "male"}
              ></input>
              <img
                src={male}
                alt="male"
                className="imgreg"
                id="male"
                name="one"
              ></img>
            </label>
            <label className=" flex flex-row-reverse items-center gap-2 cursor-pointer">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === "female"}
              ></input>
              <img src={female} alt="female"></img>
            </label>
          </div>

          <div>
            {role === "Owner" ? null : (
              <>
                <div className=" w-full my-7">
                  <input
                    type="text"
                    placeholder="College"
                    className=" p-2  w-[100%] md:w-[80%]  rounded-lg border-2 border-gray-300"
                    value={college !== null ? college : "unavailable"}
                  ></input>
                </div>
                <div className=" w-full my-7">
                  <input
                    type="text"
                    placeholder="University"
                    className=" p-2  w-[100%] md:w-[80%]  rounded-lg border-2 border-gray-300"
                    value={univerctiy !== null ? univerctiy : "unavailable"}
                  ></input>
                </div>
              </>
            )}

            <div className=" flex justify-between  w-[100%] md:w-[80%] ">
              <div className="flex justify-center flex-col items-center p-2 border-gray-300 border-2 rounded-lg w-24 h-24">
                <h1 className=" font-semibold text-lg">Views</h1>
                <p className=" font-semibold text-lg">{views}</p>
              </div>
              {role === "Owner" ? (
                <div className="flex justify-center flex-col items-center p-2 border-gray-300 border-2 rounded-lg w-fit h-24">
                  <h1 className=" font-semibold text-lg">Apartments</h1>
                  <p className=" font-semibold text-lg">{apart}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewUserInformation;

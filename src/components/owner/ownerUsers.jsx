import React from "react";
import Tableitems from "./items/tableitems";
import Buttondash from "../fixed/buttondash";
import OwnergetNumberUsersHock from "../../hookPages/ownergetNumberUsersHock";

const OwnerUsers = ({ clicker }) => {
  const [res] = OwnergetNumberUsersHock();
  return (
    <div>
      <div className=" flex justify-end">
        <Buttondash clicker={clicker}></Buttondash>
      </div>
      <div className=" grid grid-cols-12 gap-6 m-auto mt-6">
        <div className="bg-white p-5 text-center col-span-4  w-full h-[155px] flex flex-col justify-center items-center rounded-xl shadow-lg    ">
          <h1>Total Users</h1>
          <p className=" font-semibold mt-3">
            {res && res.data && res.data.data ? res.data.data.ownStudents : 0}
          </p>
        </div>
        <div className="bg-white p-5 text-center col-span-4  h-[155px] flex flex-col justify-center items-center rounded-xl shadow-lg    ">
          <h1> Monthly Users</h1>
          <p className=" font-semibold mt-3 users"> 5</p>
        </div>
        <div className=" p-5 text-center col-span-4  h-[155px] flex flex-col justify-center items-center rounded-xl shadow-lg request">
          <h1>Requested Users </h1>
          <p className=" font-semibold mt-3">
            {res && res.data && res.data.data
              ? res.data.data.requestedStudents
              : 0}
          </p>
        </div>
      </div>

      <div className=" my-9">
        <Tableitems> </Tableitems>
      </div>
    </div>
  );
};

export default OwnerUsers;

import React from "react";
import AdminTr from "./items/adminTr";
import AdminTable from "./adminTable";
import AdminAllUsersHook from "../../hookPages/adminAllUsersHook";
import Buttondash from "../fixed/buttondash";
import { Link } from "react-router-dom";

const Adminusers = ({ clicker }) => {
  const [, , , loadingg, numberUsers] = AdminAllUsersHook();

  return (
    <div>
      <div className=" flex justify-end">
        <Buttondash clicker={clicker}></Buttondash>
      </div>
      <div className=" grid grid-cols-12 gap-6 m-auto ">
        <div className="bg-white p-5 text-center col-span-4 h-[155px] flex flex-col justify-center items-center rounded-xl shadow-lg    ">
          <h1>Total Users</h1>
          <p className=" font-semibold mt-3">
            {numberUsers && numberUsers.allUsers ? numberUsers.allUsers : null}
          </p>
        </div>
        <div className=" request p-5 text-center col-span-4 h-[155px] flex flex-col justify-center items-center rounded-xl shadow-lg    ">
          <h1> Students</h1>
          <p className=" font-semibold mt-3 users">
            {" "}
            {numberUsers && numberUsers.students ? numberUsers.students : null}
          </p>
        </div>
        <Link to={"/admin/owners"} className="col-span-4 h-[155px]">
          <div className=" p-5 text-center  h-[155px] flex flex-col justify-center items-center rounded-xl shadow-lg bg-white ">
            <h1>Owners </h1>
            <p className=" font-semibold mt-3">
              {" "}
              {numberUsers && numberUsers.owners ? numberUsers.owners : null}
            </p>
          </div>
        </Link>
      </div>

      <div className="my-9">
        <AdminTable value={"User"}></AdminTable>
      </div>
    </div>
  );
};

export default Adminusers;

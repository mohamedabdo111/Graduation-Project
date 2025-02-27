import React, { useState } from "react";
import Adminsidebars from "../../components/admin/adminsidebar";
import Adminusers from "../../components/admin/adminusers";

const AdminUsersPage = () => {
  const [active, setActive] = useState(false);
  const Activate = () => {
    setActive(!active);
  };
  return (
    <div className=" grid grid-cols-12 mt-5">
      <div
        className={`hidden md:block md:col-span-4 lg:col-span-3 m-3 ${
          active ? "dispalydash" : "hidedash"
        }`}
      >
        <Adminsidebars></Adminsidebars>
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-9 m-3">
        <Adminusers clicker={Activate}></Adminusers>
      </div>
    </div>
  );
};

export default AdminUsersPage;

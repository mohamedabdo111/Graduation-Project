import React, { useState } from "react";
import Adminsidebars from "../../components/admin/adminsidebar";
import Adminusers from "../../components/admin/adminusers";
import AdminOwner from "../../components/admin/adminowners";

const AdminOwnersPage = () => {
  const [active, setActive] = useState(false);
  const Activate = () => {
    setActive(!active);
  };
  return (
    <div className=" grid grid-cols-12 mt-5">
      <div
        className={`hidden md:block md:col-span-4 lg:col-span-3 m-3 ${
          active ? "dispalydash" : null
        }`}
      >
        <Adminsidebars></Adminsidebars>
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-9 m-3">
        <AdminOwner clicker={Activate}></AdminOwner>
      </div>
    </div>
  );
};

export default AdminOwnersPage;

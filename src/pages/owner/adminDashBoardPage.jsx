import React, { useState } from "react";
import Ownersidebar from "../../components/owner/adminSideBar";
import AdminDash from "../../components/owner/adminbash";
import Buttondash from "../../components/fixed/buttondash";

const OwnerDashBoardPage = () => {
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
        <Ownersidebar></Ownersidebar>
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-9 m-3">
        <AdminDash clicker={Activate}></AdminDash>
      </div>
    </div>
  );
};

export default OwnerDashBoardPage;

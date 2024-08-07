import React, { useState } from "react";
import OwnerPassword from "../../components/owner/ownerPassword";
import Ownersidebar from "../../components/owner/adminSideBar";

const OwnerPasswordPage = () => {
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
        <Ownersidebar></Ownersidebar>
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-9 m-3">
        <OwnerPassword clicker={Activate}></OwnerPassword>
      </div>
    </div>
  );
};

export default OwnerPasswordPage;

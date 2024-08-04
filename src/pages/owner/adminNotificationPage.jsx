import React, { useState } from "react";
import AdminNotification from "../../components/owner/adminNotification";
import Ownersidebar from "../../components/owner/adminSideBar";

const OwnerNotificationPage = () => {
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
        <AdminNotification clicker={Activate}></AdminNotification>
      </div>
    </div>
  );
};

export default OwnerNotificationPage;

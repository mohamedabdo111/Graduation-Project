import React, { useEffect, useState } from "react";
import NotificationSection from "./items/notificationSection";
import { useDispatch, useSelector } from "react-redux";
import { GetNotificationAction } from "../../redux/actions/ownerAction";
import GetNotificationHook from "../../hookPages/getNotificationHook";
import Buttondash from "../fixed/buttondash";
import Loading from "../fixed/Loading";
import NotFound from "../fixed/notFound";
const AdminNotification = ({ clicker }) => {
  if (JSON.parse(localStorage.getItem("UserInf")) != null) {
    var userId = JSON.parse(localStorage.getItem("UserInf")).userId;
  } else {
    userId = "";
  }

  const [loading, data] = GetNotificationHook(userId);

  return (
    <div>
      <div className=" flex justify-between items-center">
        <div>
          <h1 className="head-dash text-xl">Notification</h1>
          <div className="color-dash bg-notifi"></div>
        </div>

        <Buttondash clicker={clicker}></Buttondash>
      </div>

      <div className="w-[95%] md:w-[65%] mx-auto mt-8">
        <div className=" bg-red-600 text-white p-3 rounded-lg">
          <p className=" font-semibold ">We released some new features</p>
          <p className=" ">Check them out!</p>
        </div>
      </div>
      <div className="w-[95%] md:w-[65%] mx-auto rounded-lg overflow-hidden ">
        {!loading ? (
          data && data.length >= 1 ? (
            data.map((item, index) => {
              return (
                <NotificationSection
                  item={item}
                  key={index}
                ></NotificationSection>
              );
            })
          ) : (
            <h1 className="for-not-found">
              <NotFound item={"Notifications"}></NotFound>
            </h1>
          )
        ) : (
          <h1 className="for-not-found">
            <Loading></Loading>
          </h1>
        )}
      </div>
    </div>
  );
};

export default AdminNotification;

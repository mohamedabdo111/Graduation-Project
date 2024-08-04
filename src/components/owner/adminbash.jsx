import React from "react";
import Buttondash from "../fixed/buttondash";

const AdminDash = ({ clicker }) => {
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div>
          <h1 className="head-dash text-xl">Overview</h1>
          <div className="color-dash  bg-dash"></div>
        </div>

        <Buttondash clicker={clicker}></Buttondash>
      </div>

      <div className="bg-white mt-8 p-5 rounded-md">
        <h1 className="head-dash mb-5">Better Call Home</h1>

        <p className="para-dash mb-4">
          Our Housing system is very easy to understand in a way that makes us
          use a very simple authentication progress yet so effective and
          understandable, we always aim to protect our users and always provide
          them with the best of our efforts looking always to satisfy our users
          with our most devoted work to be able to offer the best services ever
          to you.
        </p>

        <p className="para-dash mb-4">
          Better Call Home is trying to provide the best services which can
          benefit our users as always, if you’re looking for appropriate renting
          systems with the suitable place, apartment, availability, roommates
          and price
        </p>

        <p className="para-dash mb-4">
          This user dashboard tells us a lot about your preferences and always
          keeps you updated with the latest new about the housing systems we’re
          running to provide you with the best services we’re gladly here to
          offer.
        </p>

        <div className=" grid grid-cols-12 justify-between gap-4 mt-10">
          <div className="col-span-12 sm:col-span-6 md:col-span-4 text-center w-[150px] m-auto h-[150px] flex flex-col justify-center items-center rounded-xl bg-dash text-white">
            <h1 className=" font-bold text-4xl mb-2">56</h1>
            <p className=" font-medium">Total Users</p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 text-center w-[150px] m-auto h-[150px] flex flex-col justify-center items-center rounded-xl bg-white shadow-lg">
            <h1 className=" font-bold text-4xl mb-2">56</h1>
            <p className=" font-medium">Total Users</p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 text-center w-[150px] m-auto h-[150px] flex flex-col justify-center items-center rounded-xl bg-white shadow-lg">
            <h1 className=" font-bold text-4xl mb-2">56</h1>
            <p className=" font-medium">Total Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;

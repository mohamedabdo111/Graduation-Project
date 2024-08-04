import React from "react";
import FlatCardOwner from "./items/flatCardOwner";

import PaginationCode from "../fixed/Pagination";
import OwenrAllFlatsHook from "../../hookPages/owenrAllFlats";
import NotFound from "../fixed/notFound";
import Loading from "../fixed/Loading";
import Buttondash from "../fixed/buttondash";
const OwneAllFlats = ({ clicker }) => {
  if (JSON.parse(localStorage.getItem("UserInf")) != null) {
    var userId = JSON.parse(localStorage.getItem("UserInf")).userId;
  } else {
    userId = "";
  }
  const [loading, data, totalPages, onpress] = OwenrAllFlatsHook(userId);

  return (
    <div>
      <div className=" flex justify-between items-center">
        <div>
          <h1 className="head-dash text-xl">All Apartments</h1>
          <div className="color-dash bg-notifi"></div>
        </div>

        <Buttondash clicker={clicker}></Buttondash>
      </div>

      {!loading ? (
        data ? (
          data.map((item, index) => {
            return <FlatCardOwner item={item} key={index}></FlatCardOwner>;
          })
        ) : (
          <NotFound item={"Apartments"}></NotFound>
        )
      ) : (
        <Loading></Loading>
      )}
      {totalPages <= 1 ? null : (
        <PaginationCode
          pageCount={totalPages}
          onpress={onpress}
        ></PaginationCode>
      )}
    </div>
  );
};

export default OwneAllFlats;

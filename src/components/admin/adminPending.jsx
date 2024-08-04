import React from "react";
import CardPending from "./items/cardPending";
import PaginationCode from "../fixed/Pagination";
import AdminGetAllPendingHook from "../../hookPages/adminGetAllPendingHook";
import NotFound from "../fixed/notFound";
import Loading from "../fixed/Loading";
import Buttondash from "../fixed/buttondash";

const AdminPending = ({ clicker }) => {
  const [loading, data, onpress] = AdminGetAllPendingHook();

  return (
    <div style={{ minHeight: "120vh" }}>
      <div className=" flex justify-between items-center">
        <div>
          <h1 className="head-dash text-xl">Pending</h1>
          <div className="color-dash bg-zinc-700"></div>
        </div>

        <Buttondash clicker={clicker}></Buttondash>
      </div>

      <div className=" w-[100%] sm:w-[65%] mx-auto my-6">
        {!loading ? (
          data && data.date.length > 0 ? (
            data.date.map((item, index) => {
              return <CardPending item={item} key={index}></CardPending>;
            })
          ) : (
            <NotFound item={"any Pending"}></NotFound>
          )
        ) : (
          <Loading></Loading>
        )}

        {data.totalPages && data.totalPages > 1 ? (
          <PaginationCode pageCount={2} onpress={onpress}></PaginationCode>
        ) : null}
      </div>
    </div>
  );
};

export default AdminPending;

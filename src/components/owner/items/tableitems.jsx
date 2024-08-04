import React from "react";
import TrTable from "./trTable";
import OwnerGetUserRequestHook from "../../../hookPages/ownerGetUserRequestHook";
import PaginationCode from "../../fixed/Pagination";
import NotFound from "../../fixed/notFound";
import Loading from "../../fixed/Loading";

const Tableitems = () => {
  const [loading, data, onpress] = OwnerGetUserRequestHook();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm rounded-md overflow-hidden">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
              Phone
            </th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
              Flat Name
            </th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {!loading ? (
            data && data.date ? (
              data.date.map((item, index) => {
                return <TrTable key={index} item={item}></TrTable>;
              })
            ) : (
              <NotFound item={"users"}></NotFound>
            )
          ) : (
            <h1 className="for-not-found">
              <Loading></Loading>
            </h1>
          )}
        </tbody>
      </table>

      {data && data.totalPages && data.totalPages > 1 ? (
        <PaginationCode
          pageCount={data.totalPages}
          onpress={onpress}
        ></PaginationCode>
      ) : null}
    </div>
  );
};

export default Tableitems;

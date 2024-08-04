import React, { useEffect, useState } from "react";
import TrTable from "../owner/items/trTable";
import AdminTr from "./items/adminTr";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsersAction } from "../../redux/actions/adminAction";
import NotFound from "../fixed/notFound";
import Loading from "../fixed/Loading";
import PaginationCode from "../fixed/Pagination";
import AdminAllUsersHook from "../../hookPages/adminAllUsersHook";

const AdminTable = ({ value }) => {
  const [data, onpress, loading, loadingg, numberUsers] =
    AdminAllUsersHook(value);
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
              Role
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
                return <AdminTr key={index} item={item}></AdminTr>;
              })
            ) : (
              <NotFound item={"Users"}></NotFound>
            )
          ) : (
            <h1 className="for-not-found">
              <Loading></Loading>
            </h1>
          )}
        </tbody>
      </table>
      {data && data && data.totalPages > 1 ? (
        <PaginationCode
          pageCount={data.totalPages}
          onpress={onpress}
        ></PaginationCode>
      ) : null}
    </div>
  );
};

export default AdminTable;

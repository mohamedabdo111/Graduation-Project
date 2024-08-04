import React from "react";
import img from "../../../images/user login.png";
import AdminDeleteUserHook from "../../../hookPages/adminDeleteUserHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const AdminTr = ({ item }) => {
  const [, NotActive, activeModal, RemoveUser, active] = AdminDeleteUserHook(
    item.userId
  );

  return (
    <>
      <tr className="odd:bg-gray-50">
        <td className="whitespace-nowrap px-4 py-3 text-center font-medium text-gray-900">
          <div className=" flex items-center gap-3">
            <img
              src={item.image === null ? img : item.image}
              alt="img"
              className=" rounded-full w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] object-cover "
              property="lazy"
            ></img>
            <Link to={`/admin/user-information/${item.userId}`}>
              <span>{item.name}</span>
            </Link>
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-3 text-center text-gray-700">
          {item.phone}
        </td>
        <td className="whitespace-nowrap px-4 py-3 text-center text-gray-700">
          {item.role}
        </td>
        <td className="whitespace-nowrap px-4 py-3 text-center text-gray-700">
          <button
            className=" text-red-700  border border-red-700 p-2 rounded-2xl"
            onClick={activeModal}
          >
            <div className=" flex items-center gap-2">
              <svg
                className="w-[24px] h-[24px] "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                />
              </svg>

              <span>Delete</span>
            </div>
          </button>
        </td>
      </tr>

      {active ? (
        <div className="rounded-lg bg-white p-8 w-[90%] sm:w-[455px]  shadow-lg modal">
          <h2 className="text-lg font-bold">
            Are you sure you want to do that?
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            When you delete an apartment, it can't be retrieved again, it's OK?
          </p>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-red-600"
              onClick={RemoveUser}
            >
              Yes, I'm sure
            </button>

            <button
              type="button"
              className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
              onClick={NotActive}
            >
              No, go back
            </button>
          </div>
        </div>
      ) : null}
      <ToastContainer></ToastContainer>
    </>
  );
};

export default AdminTr;

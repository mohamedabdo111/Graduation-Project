import React from "react";
import img from "../../../images/user login.png";
import OwnerAcceptUserRequsetHook from "../../../hookPages/ownerAcceptUserRequsetHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TrTable = ({ item }) => {
  const [loading, NotActive, activeModal, RemoveUser, active, AcceptUser] =
    OwnerAcceptUserRequsetHook(item.id);
  return (
    <>
      <tr className="odd:bg-gray-50">
        <td className="whitespace-nowrap px-4 py-3 text-center font-medium text-gray-900">
          <div className=" flex items-center gap-3 justify-start">
            <img
              src={item.studentImageURL === null ? img : item.studentImageURL}
              alt="img"
              className=" rounded-full w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] object-cover"
              property="lazy"
            ></img>
            <span> {item.studentName}</span>
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-3 text-center text-gray-700">
          {item.studentPhone}
        </td>
        <td className="whitespace-nowrap px-4 py-3 text-center text-gray-700">
          {item.apartmentName}
        </td>
        <td className="whitespace-nowrap px-4 py-3 text-center text-gray-700">
          <button
            className=" bg-flat text-white p-2 rounded-2xl mx-2"
            onClick={AcceptUser}
          >
            Accept
          </button>
          <button
            className=" bg-red-700   text-white p-2 rounded-2xl"
            onClick={activeModal}
          >
            Delete
          </button>
        </td>
      </tr>

      {active ? (
        <div className="rounded-lg bg-white p-8 w-[90%] sm:w-[455px]  shadow-lg modal">
          <h2 className="text-lg font-bold">
            Are you sure you want to do that?
          </h2>

          <p className="mt-2 text-sm text-gray-500">Delete this request</p>

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

export default TrTable;

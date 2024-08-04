import React from "react";
import img from "../../../images/user login.png";
import AcceptPendingHook from "../../../hookPages/acceptPendingHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CardPending = ({ item }) => {
  const [Accept, activeModal, NotActive, Decline, loading, active] =
    AcceptPendingHook(item.apartmentID);
  console.log(item);
  return (
    <div className=" bg-white my-9 rounded-2xl">
      <div className="p-3 flex gap-3 items-center border-b-2 ">
        <img
          src={item.ownerImage === null ? img : item.ownerImage}
          alt="image"
          width={70}
          height={70}
          className=" w-[65px] h-[65px] sm:w-[70px] sm:h-[70px] rounded-full "
          property="lazy"
        ></img>
        <div>
          <p className=" text-gray-600">{item.ownerName}</p>
          <p className=" text-gray-600">1 week</p>
        </div>
      </div>
      <div className="p-3 ">
        <p className=" text-gray-600 my-3 text-center">
          New post uploaded by {item.ownerName} under the title of{" "}
          {item.apartmentTitle}
        </p>

        <div className=" border rounded-lg overflow-hidden">
          <img
            src={
              item.apartmentsPics && item.apartmentsPics[0]
                ? item.apartmentsPics[0]
                : null
            }
            alt="image cover"
            className=" rounded-lg w-full h-[225px] object-cover"
            property="lazy"
          ></img>
          <div className="p-4">
            <p className=" font-semibold text">{item.address}</p>
            <p className="  text-gray-600">{item.numberOfUsers} residents </p>
            <p className="  text-gray-600">{item.salary} EGP</p>
          </div>
        </div>

        <div className="text-center my-4">
          <button
            className="bg-green-600 text-white p-2 rounded-lg mx-2"
            onClick={Accept}
          >
            Accept
          </button>
          <button
            className="bg-red-600 text-white p-2 rounded-lg mx-2"
            onClick={activeModal}
          >
            Decline
          </button>
        </div>
      </div>

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
              onClick={Decline}
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
    </div>
  );
};

export default CardPending;

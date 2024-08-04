import React, { useState } from "react";
import img from "../../../images/Screenshot 2024-03-21 215400.jpg";
import { Link } from "react-router-dom";
import OwnerDeleteApartmentHook from "../../../hookPages/ownerDeleteApartmentHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FlatCardOwner = ({ item }) => {
  const [active, loading, activeModal, NotActive, RemoveApartment] =
    OwnerDeleteApartmentHook(item.apartmentID);

  return (
    <div className=" my-5 w-[95%] sm:w-[80%] md:w-[80%] lg:w-[60%] m-auto rounded-xl overflow-hidden  bg-white">
      <div className="imagecardflat relative">
        <img
          src={item.apartmentCoverImage}
          alt="image"
          className=" h-full bg-contain w-full rounded-xl object-cover"
          property="lazy"
        />
        <div
          className="top-2  cursor-pointer absolute right-3"
          onClick={activeModal}
        >
          <svg className="w-6 h-6 text-red-700 hover:text-gray-400  ">
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <Link
          to={`/owner/edit-flat/${item.apartmentID}`}
          className=" bg-white shadow-lg  p-3 w-[100px]  rounded-xl absolute bottom-2 right-3 flex justify-center gap-1 "
        >
          <svg
            className="w-6 h-6 text-links "
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
              strokeWidth="2"
              d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
            />
          </svg>

          <span className=" text-links">Edit</span>
        </Link>
      </div>

      <div>
        <h1 className=" font-bold fam text-lg mt-6 text-center text-zinc-800 p-2">
          {item.apartmentTitle}
        </h1>
        <p className="text-center text-zinc-800 p-2">
          {item.description !== null ? item.description : null}
        </p>

        <h2 className=" font-semibold fam  text-center text-zinc-800 p-2">
          {item.address}
        </h2>
        <h2 className=" font-semibold fam text-lg  text-center text-flat p-2">
          {item.salary} EGP
        </h2>
        <h2 className=" font-semibold fam  text-center text-zinc-800 p-3">
          ({item.numberOfUsers}/2 )Users
        </h2>
      </div>

      {active ? (
        <div className="rounded-lg bg-white p-8 w-[90%] sm:w-[455px]  shadow-2xl modal">
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
              onClick={RemoveApartment}
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
    </div>
  );
};

export default FlatCardOwner;

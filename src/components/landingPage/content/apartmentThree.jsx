import React from "react";
import CardsLanding from "./cardslanding";
import { Link } from "react-router-dom";
import GetAllApartmentHook from "../../../hookPages/getAllApartmentHook";
import Loading from "../../fixed/Loading";
import NotFound from "../../fixed/notFound";
const ApartmentThree = () => {
  const [loading, data] = GetAllApartmentHook();
  let threeApart = "";
  if (data.date) {
    threeApart = data.date.slice(0, 3);
  }

  return (
    <div className=" bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-9 mb-20 p-5">
        <h1 className="text-primary text-4xl font-bold">Best recommendation</h1>
        <div className=" flex justify-between my-5 flex-wrap ">
          <p className="w-[75%] sm:para-about mb-3">
            Discover our exclusive selection of the finest one of a kind luxury
            properties architectural masterpieces.
          </p>
          <Link
            className=" flex gap-3 justify-center w-44 sm:w-52 cursor-pointer bg-white px-8 py-3 items-center h-fit text-sm sm:text-normal hover:text-sec "
            to={"/user/view-apartments"}
          >
            <span className="font-thin read-about ">VIEW MORE</span>
            <span>
              <svg
                className="w-[24px] h-[24px] text-gray-800"
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
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </span>
          </Link>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {!loading ? (
            threeApart && threeApart != "" ? (
              threeApart.map((item, index) => {
                return <CardsLanding item={item} key={index}></CardsLanding>;
              })
            ) : (
              <NotFound item={"Apartments"}></NotFound>
            )
          ) : (
            <h1 className="for-not-found">
              <Loading></Loading>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentThree;

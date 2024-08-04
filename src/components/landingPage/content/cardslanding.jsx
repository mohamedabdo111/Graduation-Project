import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const CardsLanding = ({ item }) => {
  return (
    <div className=" bg-white border shadow-md rounded-md">
      <div className="text-center">
        <img
          src={item.imageURL || <Skeleton></Skeleton>}
          alt="imagecard"
          className="imgland p-2  object-cover"
        ></img>
        <h1 className="m-4 font-bold font-mono">{item.name || <Skeleton />}</h1>
        <h4 className="text-sec m-4">{item.salary}</h4>

        <Link
          className=" text-sec m-4 block border p-2 border-sec "
          to={`/user/apartment-details/${item.apartmentID}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CardsLanding;

import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div
      className=" my-16 text-center flex justify-center items-center"
      style={{ minHeight: "40vh" }}
    >
      <div>
        <h1 className=" font-semibold text-9xl my-5 text-zinc-700">404</h1>
        <h1 className=" font-semibold text-3xl text-zinc-700">Not Found</h1>
        <p className="mt-3 mb-5 text-zinc-700 font-normal">
          This ressource requested could not be found on this server
        </p>

        <Link to={"/"} className="btn bg-zinc-700">
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default Error404;

import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const UserCard = ({ item }) => {
  return (
    <Fade
      triggerOnce={true}
      direction="up"
      className="bg-white col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl border overflow-hidden m-3"
    >
      <div>
        <Link to={`/user/apartment-details/${item.apartmentID}`}>
          <img
            src={item.imageURL}
            alt="image"
            className=" w-full object-cover rounded-xl h-[175px] shadow-xl"
          ></img>
        </Link>

        <div className="">
          <div className=" flex gap-1 justify-start flex-row-reverse p-2 ">
            <svg
              className="w-[24px] h-[24px] text-gray-800 "
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
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              />
            </svg>

            <h1 className=" font-sans font-medium fam">{item.name}</h1>
          </div>
          <div className=" flex gap-1 justify-start flex-row-reverse p-2 ">
            <svg
              className="w-[24px] h-[24px] text-user"
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
                d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
              />
            </svg>

            <h1 className=" font-sans font-semibold text-lg text-user ">
              {item.salary} EGP
            </h1>
          </div>
          <div className=" flex gap-1 justify-start flex-row-reverse p-2 ">
            <svg
              className="w-[24px] h-[24px] text-gray-800 "
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
                d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"
              />
            </svg>

            <h1 className=" text-sm text-gray-500  fam"> {item.city}</h1>
          </div>
          <div className=" flex gap-1 justify-start flex-row-reverse p-2">
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
                d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
              />
            </svg>

            <h1 className=" font-sans text-sm text-gray-500 fam ">
              {item.address}
            </h1>
          </div>
          <div className=" flex gap-1 justify-start flex-row-reverse p-2 ">
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
                strokeWidth="1.5"
                d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>

            <h1 className=" font-sans text-sm text-gray-500 fam">{`(${item.totalCount} / ${item.apartmentExistCount})`}</h1>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default UserCard;

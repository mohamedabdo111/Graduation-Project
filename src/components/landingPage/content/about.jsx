import React from "react";
import img from "../../../images/Rectangle 9.png";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const About = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-12 my-10 gap-5 bg-gray-100 p-4">
      <div className=" hidden sm:block col-span-6 m-auto ">
        <Fade triggerOnce={true} direction="up">
          <img src={img} property="lazy"></img>
        </Fade>
      </div>
      <div className=" col-span-12 sm:col-span-6">
        <Fade triggerOnce={true} direction="down">
          <h1 className="banner-text text-5xl font-thin">About</h1>
        </Fade>
        <p className=" my-4 leading-7 para-about">
          <Fade triggerOnce={true} direction="up">
            About Better Call home is a real estate agency that helps you find
            homes easily with your specific characteristics and requirements,
            also it helps you sell your home it helps you find the proper buyer,
            it helps you buy or rent your dream home with the outstanding help
            of our team as it’s the most professional in the business.
          </Fade>
        </p>

        <Fade triggerOnce={true} direction="up">
          <Link
            className=" flex gap-3 w-52 cursor-pointer bg-white px-8 py-5 hover:text-sec justify-center"
            to="/aboutus"
          >
            <span className=" font-thin read-about">READ MORE</span>
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
        </Fade>
      </div>
    </div>
  );
};

export default About;

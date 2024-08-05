import React from "react";
import img from "../../images/io.jpeg";
import logo from "../../images/Group11.png";
const AboutUsPage = () => {
  return (
    <div className="">
      <section className="relative bg-white">
        <div className=" mx-auto max-w-screen-xl px-4 py-32 sm:px-6 block md:flex md:justify-between">
          <div className=" text-center ltr:sm:text-left rtl:sm:text-right max-w-[500px] flex items-center">
            <h1 className="text-6xl sm:text-7xl banner-text font-thin text-left better">
              Better Call
              <strong className="block font-extrabold text-zinc-800 my-3">
                Home
              </strong>
            </h1>
          </div>
          <div className=" relative">
            <img src={img} alt="about" className="h-full w-full"></img>
            <div className="heart-Number text-center">
              <h1 className=" font-semibold text-5xl mb-6">Better Call Home</h1>
              <p className=" font-medium">
                Better Call home is a real estate agency that helps you find
                homes easily with your specific characteristics and
                requirements, Better Call Home helps you find estates either for
                buying, selling and renting
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex gap-6 justify-evenly items-center mx-5 min-h-[150px] my-16">
        <img src={logo} className="w-[150px]"></img>
        <div className=" max-w-[600px] text-start">
          <h1 className=" font-semibold font-serif text-2xl ">
            Better Call Home
          </h1>
          <p className=" leading-8 text-gray-400">
            It started out as a graduation project in our senior year studying
            in New Damietta Faculty of Computers and Artificial Intelligence.
            Everything starts with a dream and this is ours at the moment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

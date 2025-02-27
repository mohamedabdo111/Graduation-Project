import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Main = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-9 mb-20">
      <Fade triggerOnce={true} direction="down">
        <h1 className=" m-0 font-thin text-4xl md:text-7xl banner-text">
          Main Focus/Mission Statement
        </h1>
      </Fade>

      <section className=" grid grid-cols-12 my-9">
        <div className=" col-span-12 sm:col-span-6 flex gap-6 items-center">
          <Fade triggerOnce={true} direction="up">
            =<h1 className=" text-primary text-9xl font-extrabold">1</h1>
            <p className="para-about ">
              Sell and rent smarter with Better Call Home, Sell and rent your
              property smarter with more data and insight with our free home
              value report.
            </p>
          </Fade>
        </div>
        <div className="col-span-12 sm:col-span-6 flex gap-6 items-center">
          <Fade triggerOnce={true} direction="up">
            <h1 className=" text-primary text-9xl font-extrabold">2</h1>
            <p className="para-about ">
              Comparable Sales, See what other estates are being sold/rented for
              in and around your neighborhood as it helps you find the perfect
              price.
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Main;

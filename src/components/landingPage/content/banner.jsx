import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right max-w-[500px]">
          <h1 className="text-6xl font-bold  sm:text-7xl banner-text font-thin text-left better">
            Better Call
            <strong className="block font-extrabold text-zinc-800 my-3">
              {" "}
              Home{" "}
            </strong>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;

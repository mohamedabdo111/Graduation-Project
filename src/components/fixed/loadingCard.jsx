import React from "react";

const LoadingCard = () => {
  return (
    <div className="bg-white col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl border overflow-hidden m-3">
      <div className=" w-full object-cover rounded-xl h-[175px] shadow-xl animate-pulse bg-gray-400"></div>

      <div className="">
        <div className=" flex gap-1 justify-start flex-row-reverse ">
          <h1 className=" font-sans font-medium fam w-[80%] h-2 rounded-xl animate-pulse bg-gray-500  p-1 m-2"></h1>
        </div>
        <div className=" flex gap-1 justify-start flex-row-reverse ">
          <h1 className=" font-sans font-medium fam w-[80%] h-2 rounded-xl animate-pulse bg-gray-500  p-1 m-2"></h1>
        </div>
        <div className=" flex gap-1 justify-start flex-row-reverse ">
          <h1 className=" font-sans font-medium fam w-[80%] h-2 rounded-xl animate-pulse bg-gray-500  p-1 m-2"></h1>
        </div>
        <div className=" flex gap-1 justify-start flex-row-reverse ">
          <h1 className=" font-sans font-medium fam w-[80%] h-2 rounded-xl animate-pulse bg-gray-500  p-1 m-2"></h1>
        </div>
        <div className=" flex gap-1 justify-start flex-row-reverse ">
          <h1 className=" font-sans font-medium fam w-[80%] h-2  rounded-xl animate-pulse bg-gray-500  p-1 m-2"></h1>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;

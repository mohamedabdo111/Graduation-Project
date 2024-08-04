import React, { useState } from "react";
const UserImages = ({ apartmentInfo }) => {
  var parentImage = apartmentInfo.apartmentsImages[0];

  const [image, setImage] = useState("");
  const changeImage = (e) => {
    setImage(e.target.src);
  };

  return (
    <div className="grid grid-cols-12  gap-3 my-6 overflow-auto">
      <div className=" col-span-12 md:col-span-6 h-[420px]  w-[100%]">
        <img
          src={image === "" ? parentImage : image}
          alt="imagecover"
          className=" h-full object-cover rounded-md w-full"
        />
      </div>
      <div className=" col-span-12 md:col-span-6 flex imageDetails justify-between cursor-pointer">
        {apartmentInfo && apartmentInfo.apartmentsImages
          ? apartmentInfo.apartmentsImages.map((item, index) => {
              return (
                <img
                  src={item}
                  key={index}
                  alt="imagecover"
                  className=" h-full object-cover rounded-md cursor-pointer "
                  onClick={changeImage}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default UserImages;

import React from "react";
import img from "../../images/user login.png";
import AddCommentHook from "../../hookPages/addCommentHook";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddLikeHook from "../../hookPages/addLikeHook";
import EnrollHook from "../../hookPages/enrollHook";
const UserInformation = ({ userInfo }) => {
  const { id } = useParams();
  const [comments, loading, onChangeComment, Submit] = AddCommentHook(id);
  const [, SubmitLike] = AddLikeHook(id);
  const [, OnEnroll] = EnrollHook(id);

  return (
    <>
      <div className=" flex flex-row-reverse justify-between">
        <div className="text-end">
          <h1 className=" fam text-xl font-bold">{userInfo.apartmentName}</h1>
          <p className="mt-2 text-lg text-gray-600 fam">
            {userInfo.apartmentPrice} EGP
          </p>
          <p className="mt-2 text-lg text-gray-600 fam ">
            {userInfo.apartmentCity}
          </p>
          <p className="mt-2 text-lg text-gray-600 fam ">
            {userInfo.apartmentAddress}
          </p>
          <p className="mt-2 text-lg text-gray-600 fam">
            {userInfo.apartmentDescription}
          </p>
        </div>
        <div
          className=" w-fit h-fit relative cursor-pointer"
          onClick={SubmitLike}
        >
          <svg
            className="w-[48px] h-[48px] text-red-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
          </svg>
          <p className="heart-Number">{userInfo.apartmentLikes}</p>
        </div>
      </div>
      <div className=" flex flex-row-reverse justify-between ">
        <p className="mt-2 text-lg text-gray-500 fam">{`(${userInfo.totalCount} / ${userInfo.studnetExistingIn})`}</p>
        <button className=" btn bg-sec" onClick={OnEnroll}>
          Enroll
        </button>
      </div>

      {/* user Information */}
      <div className="flex flex-row-reverse items-center gap-3 p-4 border-t-2 border-b-2 my-8 border-gray-500 ">
        <img
          src={userInfo.ownerImageUrl === null ? img : userInfo.ownerImageUrl}
          alt="userImage"
          className=" w-[100px] h-[100px] rounded-full border-4 border-sec  object-cover"
          property="lazy"
        ></img>
        <div className="text-end">
          <h1 className="fam text-xl font-bold">{userInfo.ownerName}</h1>
          <p className="mt-2 text-lg text-gray-600 fam ">
            (عدد الشقق) {userInfo.ownerApartmentCount}
          </p>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default UserInformation;

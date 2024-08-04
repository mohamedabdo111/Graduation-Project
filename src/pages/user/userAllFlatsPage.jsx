import React from "react";
import UserSearchBar from "../../components/user/userSearchBar";
import UserCard from "../../components/user/userCard";
import GetAllApartmentHook from "../../hookPages/getAllApartmentHook";
import PaginationCode from "../../components/fixed/Pagination";
import Slider from "react-slider";
import SidebarSearchHook from "../../hookPages/sidebarSearch";
import LoadingCard from "../../components/fixed/loadingCard";

const UserAllFlatsPage = () => {
  const [loading, , onpres, , , items] = GetAllApartmentHook();
  const [
    min,
    max,
    setValue,
    value,
    users,
    Rooms,
    active,
    add,
    notActive,
    Activate,
    minu,
    addRoom,
    minRoom,
    onChangeCity,
    onChangeGender,
    city,
    onSearch,
  ] = SidebarSearchHook();

  if (items && items.data && items.data.totalPages) {
    var pageCount = items.data.totalPages;
  }

  return (
    <div
      className="m-2 relative overflow-hidden"
      style={{ minHeight: "120vh" }}
    >
      <UserSearchBar Activate={Activate}></UserSearchBar>

      <div className=" grid grid-cols-12 gap-4 container">
        {!loading ? (
          items &&
          items.data &&
          items.data.date &&
          items.data.date.length > 0 ? (
            items.data.date.map((item, index) => {
              return <UserCard item={item} key={index}></UserCard>;
            })
          ) : (
            <h1 className="for-not-found">There Are No Apartments</h1>
          )
        ) : (
          <>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
          </>
        )}
      </div>
      {pageCount && pageCount > 1 ? (
        <div>
          <PaginationCode
            pageCount={pageCount}
            onpress={onpres}
          ></PaginationCode>
        </div>
      ) : null}

      <div
        className={`${
          active ? "sidebarSearch" : "sidebarSearchhidden"
        } shadow-lg p-4`}
      >
        <div>
          <h1 className=" text-lg text-zinc-700 font-semibold">FILTER BY</h1>
          <div className="color-dash  bg-zinc-700"></div>
        </div>

        {/* price */}
        <div className=" mt-8 w-fit">
          <h1 className="font-medium">Price</h1>
          <div className=" flex justify-between my-2">
            <h1>Range</h1>
            <p>
              {value[0]} - {value[1]}
            </p>
          </div>
          <Slider
            min={min}
            max={max}
            className="slider"
            value={value}
            onChange={setValue}
          ></Slider>
        </div>

        {/* filters */}
        <div className=" mt-8 w-fit">
          <h1 className="font-medium">Filters</h1>
          <div className=" my-2">
            <label className="flex gap-2">
              <input
                type="radio"
                name="types"
                className="w-4"
                value={"female"}
                onClick={onChangeGender}
              ></input>
              Women
            </label>
            <label className=" flex gap-2">
              <input
                type="radio"
                name="types"
                className=" w-4"
                value={"male"}
                onClick={onChangeGender}
              ></input>
              Men
            </label>
          </div>
        </div>

        {/* city */}

        <div className=" mt-8 w-fit">
          <h1 className="font-medium">City</h1>
          <div className=" my-2">
            <select
              className="p-2 bg-transparent rounded-3xl text-center border border-black w-[180px]"
              onChange={onChangeCity}
              value={city}
            >
              <option value="">select</option>
              <option value="Cairo">Cairo</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Giza">Giza</option>
              <option value="Beheira">Beheira</option>
              <option value="Kafr El Sheikh">Kafr El Sheikh</option>
              <option value="Dakahlia">Dakahlia</option>
              <option value="Gharbia">Gharbia</option>
              <option value="Monufia">Monufia</option>
              <option value="Sharqia">Sharqia</option>
              <option value="Qalyubia">Qalyubia</option>
              <option value="Damietta">Damietta</option>
              <option value="Port Said">Port Said</option>
              <option value="Ismailia">Ismailia</option>
              <option value="Suez">Suez</option>
            </select>
          </div>
        </div>

        {/* users in apartment */}
        <div className=" mt-8 w-fit">
          <h1 className="font-medium">Users in apartment</h1>
          <div className="p-1 my-2 flex w-[160px] h-14 justify-between items-center border border-gray-500 rounded-lg">
            <div
              className="p-2  text-xl font-bold border rounded-lg w-[40px] text-center select-none cursor-pointer"
              onClick={minu}
            >
              -
            </div>
            <div className="p-2  text-xl font-bold border rounded-lg w-[60px] text-center select-none">
              {users}
            </div>
            <div
              className="p-2  text-xl font-bold border rounded-lg w-[40px] text-center cursor-pointer select-none"
              onClick={add}
            >
              +
            </div>
          </div>
        </div>

        {/* rooms in apartment */}
        <div className=" mt-8 w-fit">
          <h1 className="font-medium">Rooms in apartment</h1>
          <div className="p-1 my-2 flex w-[160px] h-14 justify-between items-center border border-gray-500 rounded-lg">
            <div
              className="p-2  text-xl font-bold border rounded-lg w-[40px] text-center select-none cursor-pointer"
              onClick={minRoom}
            >
              -
            </div>
            <div className="p-2  text-xl font-bold border rounded-lg w-[60px] text-center select-none">
              {Rooms}
            </div>
            <div
              className="p-2  text-xl font-bold border rounded-lg w-[40px] text-center cursor-pointer select-none"
              onClick={addRoom}
            >
              +
            </div>
          </div>
        </div>

        <div className=" text-center mt-8">
          <button
            className="btns bg-zinc-800 text-white font-medium mx-2"
            onClick={onSearch}
          >
            Search
          </button>
          <button
            className="btns border border-zinc-800 text-zinc-800 font-medium mx-2"
            onClick={notActive}
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAllFlatsPage;

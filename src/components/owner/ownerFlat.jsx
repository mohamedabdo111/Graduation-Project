import React, { useState } from "react";
import { Link } from "react-router-dom";
import MultiImageInput from "react-multiple-image-input";
import AddImage from "../../images/addImage.png";
import OwnerAddApartmentHook from "../../hookPages/ownerAddApartmentHook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Buttondash from "../fixed/buttondash";

const OwnerFlat = ({ clicker }) => {
  const [
    images,
    setImages,
    onChangeDocument,
    Document,
    title,
    city,
    gender,
    address,
    info,
    imageDoc,
    rooms,
    residents,
    onChangeAddress,
    onChangeCity,
    onChangeTitle,
    onChangeGender,
    onChangeInfo,
    onChangeImageDoc,
    onChangeRooms,
    onChangeRes,
    Submit,
    onChangePrice,
    price,
    imgCover,
    imgCoverlive,
    onChangeImage,
  ] = OwnerAddApartmentHook();

  return (
    <div className="mb-9">
      <div className="  md:flex justify-between items-center">
        <div className=" flex justify-between">
          <div>
            <h1 className="head-dash text-xl">Add Flat</h1>
            <div className="color-dash bg-flat"></div>
          </div>

          <Buttondash clicker={clicker}></Buttondash>
        </div>
        <div className="flex gap-8 justify-between mt-6 md:mt-0">
          <button
            className="p-3 text-white bg-dash rounded-xl  w-[80px] sm:w-[150px]"
            onClick={Submit}
          >
            Save
          </button>
          <Link
            to={"/owner/all-flats"}
            className="p-3 text-white bg-flat rounded-full w-[150px] flex gap-3 justify-center items-center"
          >
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
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                />
              </svg>
            </span>
            Flats
          </Link>
        </div>
      </div>

      <div className="inputflat w-[100%] md:w-[50%] mt-9">
        <div>
          <label className="font-semibold block">Title</label>
          <input
            type="text"
            id="Username"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
            onChange={onChangeTitle}
            value={title}
          />
        </div>
        <div className="mt-6">
          <h1 className=" font-semibold">Image Cover</h1>
          <div className="text-center">
            <img
              src={imgCoverlive === "" ? AddImage : imgCoverlive}
              alt="add_Image"
              className="m-auto w-[200px] mt-4 h-[200px] rounded-full object-cover"
            />
            <input
              type="file"
              accept="image/*"
              className=" p-2 rounded-lg bg-zinc-800 shadow-xl text-white w-full"
              onChange={onChangeImage}
            ></input>
          </div>
        </div>
        <div className="mt-6">
          <MultiImageInput
            images={images}
            setImages={setImages}
            allowCrop={false}
            theme={{
              background: "#eee",
              outlineColor: "#111111",
              textColor: "rgba(255,255,255,0.6)",
              buttonColor: "#ff0e1f",
              modalColor: "#eee",
            }}
            max={3}
          />
        </div>

        <div className=" flex justify-between mt-6 gap-3">
          <div className="text-center">
            <label className=" font-semibold mx-5">City</label>
            <select
              className="p-2 bg-transparent rounded-lg border border-black w-[100%] sm:min-w-[150px]"
              onChange={onChangeCity}
            >
              <option value="0">select</option>
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
          <div className="text-center">
            <label className=" font-semibold mx-5">Gender</label>
            <select
              className="p-2 bg-transparent rounded-lg border border-black w-[100%] sm:min-w-[150px]"
              onChange={onChangeGender}
            >
              <option value="0">select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="font-semibold block">Address</label>
          <input
            type="text"
            id="Username"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
            onChange={onChangeAddress}
          />
        </div>

        <div className="mt-6">
          <label className="font-semibold block">
            Information about the Apartment{" "}
          </label>
          <textarea
            id="Username"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
            onChange={onChangeInfo}
          />
        </div>

        <div className="mt-6">
          <h1 className=" font-semibold">
            Ownership Contract Document Authentication{" "}
          </h1>
          <div className="text-center">
            <img
              src={Document === "" ? AddImage : Document}
              alt="add_Image"
              className="m-auto w-[200px] mt-4 h-[200px] rounded-full object-cover"
            />
            <input
              type="file"
              accept="image/*"
              className=" p-2 rounded-lg bg-zinc-800 shadow-xl text-white w-full"
              onChange={onChangeDocument}
            ></input>
          </div>
        </div>

        <div className=" flex justify-between mt-6">
          <div className=" text-center">
            <label className=" font-semibold mx-5">Residents</label>
            <select
              className="p-2 bg-transparent rounded-lg border border-black min-w-[50px]"
              onChange={onChangeRes}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className=" text-center">
            <label className=" font-semibold mx-5">Rooms</label>
            <select
              className="p-2 bg-transparent rounded-lg border border-black min-w-[50px]"
              onChange={onChangeRooms}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="font-semibold block">Price Per Month</label>
          <input
            type="number"
            id="price"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
            onChange={onChangePrice}
            value={price}
          />
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default OwnerFlat;

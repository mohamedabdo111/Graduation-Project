import React, { useEffect, useState } from "react";
import MultiImageInput from "react-multiple-image-input";
import GetApartmentDetailsHook from "../../hookPages/getApartmentDetailsHook";
import { useParams } from "react-router-dom";
import NotFound from "../fixed/notFound";
import Loading from "../fixed/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  EditApartmentAction,
  GetAparmentEditAction,
} from "../../redux/actions/ownerAction";
import AddImage from "../../images/user login.png";
import { notify } from "../fixed/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OwnerEditApartment = () => {
  const { id } = useParams();
  //   const [loading, data] = GetApartmentDetailsHook(id);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loadingAction, setLoadingAction] = useState(true);
  const [data, setDate] = useState("");
  const [images, setImages] = useState({});
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [residents, setResidents] = useState("");
  const [roms, setRoms] = useState("");
  const [one, setone] = useState("");
  const [price, setPrice] = useState("");
  const [imgCoverlive, setImageCoverlive] = useState("");
  const [imgCover, setImageCover] = useState("");

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetAparmentEditAction(id));
      setLoading(false);
    };

    get();
  }, []);

  const res = useSelector((item) => item.AdminReducer.getApartmentEdit);
  console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.data) {
        setDate(res.data.data);
        setTitle(res.data.data.apartmentName);
        setCity(res.data.data.apartmentCity);
        setGender(res.data.data.apartmentGender);
        setInfo(res.data.data.apartmentDescription);
        setAddress(res.data.data.apartmentAddress);
        setPrice(res.data.data.apartmentPrice);
        setResidents(res.data.data.apartmentUsers);
        setResidents(res.data.data.apartmentUsers);
        setRoms(res.data.data.apartmentRooms);
        setone(res.data.data.apartmentRooms);
        setImageCoverlive(res.data.data.apartmentCoverImage);
        setImages(res.data.data.apartmentPics);
      }
    }
  }, [loading]);

  console.log(roms);

  const onchageOne = (e) => {
    setone(e.target.value);
  };
  const onChangeImage = (e) => {
    setImageCoverlive(URL.createObjectURL(e.target.files[0]));
    setImageCover(e.target.files[0]);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeInfo = (e) => {
    setInfo(e.target.value);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const onChangeRes = (e) => {
    setResidents(e.target.value);
  };
  const onChangeRooms = (e) => {
    setRoms(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const validation = () => {
    if (title === "") {
      notify("Title is required", "warn");
    } else if (info === "") {
      notify("Information is required", "warn");
    } else if (city === "" || city === "0") {
      notify("city is required", "warn");
    } else if (gender === "" || gender === "0") {
      notify("Gender is required", "warn");
    } else if (address === "") {
      notify("Address is required", "warn");
    } else if (residents === "" || residents === "0") {
      notify("Residents is required", "warn");
    } else if (roms === "" || roms === "0") {
      notify("Rooms is required", "warn");
    } else if (price === "") {
      notify("Price is required", "warn");
    }
  };
  const Submit = async () => {
    validation();
    // const imagearr = Array.from(Array(Object.keys(images).length).keys()).map(
    //   (i, index) => {
    //     return dataURLtoFile(images[index], Math.random() + ".png");
    //   }
    // );
    setLoadingAction(true);
    const formdata = new FormData();
    formdata.append("ApartmentId", id);
    formdata.append("Title", title);
    formdata.append("Description", info);
    formdata.append("Address", address);
    formdata.append("numberOfUsers", residents);
    formdata.append("Room", one);
    formdata.append("gender", gender);
    formdata.append("City", city);
    formdata.append("price", price);
    formdata.append("NewCoverImage", imgCover);
    // imagearr.map((item) => formdata.append("NewPics", item));
    await dispatch(EditApartmentAction(formdata));
    setLoadingAction(false);
  };

  const resAction = useSelector((item) => item.AdminReducer.editApartment);

  useEffect(() => {
    if (loadingAction === false) {
      if (resAction && resAction.data && resAction.data.statusCode === 200) {
        notify("this apartment has been update", "success");
      }
    }
  }, [loadingAction]);

  return (
    <div className=" grid grid-cols-12 mb-10">
      <div className="mt-6 col-span-12 md:col-span-6 px-5 md:border-r-2 sm:border-zinc-800 ">
        {!loading ? (
          data && data !== "" ? (
            <>
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

              <div className="mt-10">
                <img
                  src={imgCoverlive === "" ? AddImage : imgCoverlive}
                  alt="add_Image"
                  className="m-auto w-[200px] mt-4 h-[200px] rounded-full object-cover"
                />
                <input
                  type="file"
                  accept="image/*"
                  className=" p-2 rounded-lg bg-zinc-800 shadow-xl text-white w-full mt-5"
                  onChange={onChangeImage}
                ></input>
              </div>
            </>
          ) : (
            <NotFound item={"Details"}></NotFound>
          )
        ) : (
          <Loading></Loading>
        )}
      </div>
      {/* input */}
      <div className=" col-span-12 md:col-span-6 px-5 mt-6 ">
        {!loading ? (
          data && data !== "" ? (
            <>
              <div>
                <label className="font-semibold block">Title</label>
                <input
                  type="text"
                  id="Username"
                  className="p-2  bg-transparent rounded-lg w-full border border-black"
                  value={title}
                  onChange={onChangeTitle}
                />
              </div>

              <div className="mt-6">
                <label className="font-semibold block">
                  Information about the Apartment{" "}
                </label>
                <textarea
                  id="Username"
                  className="p-2  bg-transparent rounded-lg w-full border border-black"
                  value={info}
                  onChange={onChangeInfo}
                />
              </div>

              <div className=" flex justify-between mt-6 gap-3">
                <div className="text-center ">
                  <label className=" font-semibold mx-5">City</label>
                  <select
                    className="p-2 bg-transparent rounded-lg border border-black w-[100%] "
                    onChange={onChangeCity}
                    value={city}
                  >
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
                <div className="text-center ">
                  <label className=" font-semibold mx-5">Gender</label>
                  <select
                    className="p-2 bg-transparent rounded-lg border border-black w-[100%] "
                    onChange={onChangeGender}
                    value={gender}
                  >
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
                  value={address}
                  onChange={onChangeAddress}
                />
              </div>

              <div className=" flex justify-between mt-6">
                <div className=" text-center">
                  <label className=" font-semibold mx-5">Residents</label>
                  <select
                    className="p-2 bg-transparent rounded-lg border border-black min-w-[50px]"
                    onChange={onChangeRes}
                    value={residents}
                  >
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
                    onChange={onchageOne}
                    value={one}
                  >
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
                  value={price}
                  onChange={onChangePrice}
                />
              </div>

              <div className="mt-6 text-center">
                <button
                  className="p-3 text-black bg-flat border-2 border-black  rounded-xl  w-[80px] sm:w-[150px]"
                  onClick={Submit}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <NotFound item={"details"}></NotFound>
          )
        ) : (
          <Loading></Loading>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default OwnerEditApartment;

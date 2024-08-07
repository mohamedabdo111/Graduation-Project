import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddApartmentAction } from "../redux/actions/ownerAction";
import { notify, one } from "../components/fixed/notify.jsx";
const OwnerAddApartmentHook = () => {
  const [images, setImages] = useState({});
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");
  const [imageDoc, setImageDoc] = useState("");
  const [residents, setResidents] = useState("");
  const [rooms, setRooms] = useState("");
  const [price, setPrice] = useState("");
  const [imgCover, setImgCover] = useState("");
  const [imgCoverlive, setImgCoverlive] = useState("");
  const [loading, setLoading] = useState(true);
  const [Ispress, setIspress] = useState(false);
  const dispatch = useDispatch();
  let userId = "";
  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    userId = JSON.parse(localStorage.getItem("UserInf")).userId;
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeImage = (e) => {
    setImgCoverlive(URL.createObjectURL(e.target.files[0]));
    setImgCover(e.target.files[0]);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
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
  const onChangeImageDoc = (e) => {
    setImageDoc(e.target.value);
  };
  const onChangeRes = (e) => {
    setResidents(e.target.value);
  };
  const onChangeRooms = (e) => {
    setRooms(e.target.value);
  };
  const onChangeInfo = (e) => {
    setInfo(e.target.value);
  };

  const [Document, setDocument] = useState("");
  const onChangeDocument = (e) => {
    setDocument(URL.createObjectURL(e.target.files[0]));
    setImageDoc(e.target.files[0]);
  };

  //   convert image from base64 to file

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
      return notify("title is required", "warn");
    } else if (imgCover === "") {
      return notify("Image Cover is required", "warn");
    } else if (images === "") {
      return notify("Images is required", "warn");
    } else if (city === "") {
      return notify("City is required", "warn");
    } else if (gender === "") {
      return notify("Gender is required", "warn");
    } else if (address === "") {
      return notify("Address is required", "warn");
    } else if (info === "") {
      return notify("Information is required", "warn");
    } else if (imageDoc === "") {
      return notify("Document authentication is required", "warn");
    } else if (residents === "") {
      return notify("Residents is required", "warn");
    } else if (rooms === "") {
      return notify("Rooms is required", "warn");
    } else if (price === "") {
      return notify("Price is required", "warn");
    } else if (title.length < 5) {
      return notify("Title is Short", "warn");
    }
  };

  const Submit = async () => {
    validation();
    const imagearr = Array.from(Array(Object.keys(images).length).keys()).map(
      (i, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );
    setIspress(true);
    const formdata = new FormData();

    formdata.append("Name", title);
    formdata.append("City", city);
    formdata.append("Gender", gender);
    formdata.append("Address", address);
    formdata.append("Description", info);
    formdata.append("RoyalDocument", imageDoc);
    formdata.append("NumberOfUsers", residents);
    formdata.append("Room", rooms);
    formdata.append("Price", price);
    formdata.append("UserId", userId);
    formdata.append("CoverImage", imgCover);

    imagearr.map((img) => formdata.append("Pics", img));
    setLoading(true);
    await dispatch(AddApartmentAction(formdata));
    setLoading(false);
  };
  const res = useSelector((item) => item.AdminReducer.addApartment);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        setIspress(false);
      }
      if (res && res.data && res.data.statusCode === 200) {
        notify("This apartment has been added", "success");

        setTitle("");
        setImageDoc("");
        setImgCover("");
        setImages({});
        setCity("");
        setGender("");
        setAddress("");
        setInfo("");
        setDocument("");
        setResidents("");
        setRooms("");
        setPrice("");
        setImgCoverlive("");
      }
    }
  }, [loading]);

  return [
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
    loading,
    Ispress,
  ];
};

export default OwnerAddApartmentHook;

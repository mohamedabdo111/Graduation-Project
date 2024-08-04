import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAparmentEditAction } from "../redux/actions/ownerAction";

const OwnerEditApartment = (id) => {
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

  //   function dataURLtoFile(dataurl, filename) {
  //     var arr = dataurl.split(","),
  //       mime = arr[0].match(/:(.*?);/)[1],
  //       bstr = atob(arr[arr.length - 1]),
  //       n = bstr.length,
  //       u8arr = new Uint8Array(n);
  //     while (n--) {
  //       u8arr[n] = bstr.charCodeAt(n);
  //     }
  //     return new File([u8arr], filename, { type: mime });
  //   }

  //   const validation = () => {
  //     if (title === "") {
  //       notify("Title is required", "warn");
  //     } else if (info === "") {
  //       notify("Information is required", "warn");
  //     } else if (city === "" || city === "0") {
  //       notify("city is required", "warn");
  //     } else if (gender === "" || gender === "0") {
  //       notify("Gender is required", "warn");
  //     } else if (address === "") {
  //       notify("Address is required", "warn");
  //     } else if (residents === "" || residents === "0") {
  //       notify("Residents is required", "warn");
  //     } else if (roms === "" || roms === "0") {
  //       notify("Rooms is required", "warn");
  //     } else if (price === "") {
  //       notify("Price is required", "warn");
  //     }
  //   };

  //   const Submit = async () => {
  //     validation();
  //     // const imagearr = Array.from(Array(Object.keys(images).length).keys()).map(
  //     //   (i, index) => {
  //     //     return dataURLtoFile(images[index], Math.random() + ".png");
  //     //   }
  //     // );
  //     setLoadingAction(true);
  //     const formdata = new FormData();
  //     formdata.append("ApartmentId", id);
  //     formdata.append("Title", title);
  //     formdata.append("Description", info);
  //     formdata.append("Address", address);
  //     formdata.append("numberOfUsers", residents);
  //     formdata.append("Room", 1);
  //     formdata.append("gender", gender);
  //     formdata.append("City", city);
  //     formdata.append("price", price);
  //     formdata.append("NewCoverImage", imgCover);
  //     // imagearr.map((item) => formdata.append("NewPics", item));
  //     await dispatch(EditApartmentAction(formdata));
  //     setLoadingAction(false);
  //   };

  //   const resAction = useSelector((item) => item.AdminReducer.editApartment);

  //   useEffect(() => {
  //     if (loadingAction === false) {
  //       console.log(resAction);
  //     }
  //   }, [loadingAction]);

  return [
    onchageOne,
    onChangeImage,
    onChangeTitle,
    onChangeInfo,
    onChangeCity,
    onChangeGender,
    onChangeRes,
    onChangePrice,
    Submit,
    address,
    city,
    gender,
    loading,
    data,
    info,
    title,
    images,
    setImages,
    one,
    imgCoverlive,
    onChangeAddress,
    residents,
    price,
  ];
};

export default OwnerEditApartment;

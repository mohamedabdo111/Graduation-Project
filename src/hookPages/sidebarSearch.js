import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllApartmentAction } from "../redux/actions/getAllApartmentAction";

const SidebarSearchHook = () => {
  const min = 0;
  const max = 50000;
  const [value, setValue] = useState([min, max]);

  const [users, setUsers] = useState(0);
  const [Rooms, setRooms] = useState(0);
  const [active, setActive] = useState(false);
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  let minPrice = value[0];
  let maxPrice = value[1];

  //   changeValues

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  const add = () => {
    setUsers(users + 1);
  };

  const notActive = () => {
    setActive(false);
  };

  const Activate = () => {
    setActive(true);
  };

  const minu = () => {
    if (users > 0) {
      setUsers(users - 1);
    }
  };

  const addRoom = () => {
    setRooms(Rooms + 1);
  };
  const minRoom = () => {
    if (Rooms > 0) {
      setRooms(Rooms - 1);
    }
  };

  const onSearch = async () => {
    let search = "";
    setLoading(true);
    localStorage.setItem("minPrice", minPrice);
    localStorage.setItem("city", city);
    localStorage.setItem("gender", gender);
    localStorage.setItem("users", users);

    if (localStorage.getItem("search") !== null) {
      search = localStorage.getItem("search");
    }
    dispatch(
      GetAllApartmentAction(
        `PageNumber=${1}&PageSize=${3}&Search=${search}&Gender=${gender}&City=${city}&CountInApartment=${users}&minPrice=${minPrice}`
      )
    );
    setLoading(false);
  };

  // const res = useSelector((item) => item.AllApartment.getApatments);

  return [
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
  ];
};

export default SidebarSearchHook;

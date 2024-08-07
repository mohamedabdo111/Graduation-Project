import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllApartmentAction } from "../redux/actions/getAllApartmentAction";

const GetAllApartmentHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  const limit = 5;
  const get = async (word) => {
    setLoading(true);
    await dispatch(GetAllApartmentAction(`PageSize=${limit}&Search=${word}`));
    setLoading(false);
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    localStorage.setItem("search", e.target.value);
  };

  useEffect(() => {
    get(search);

    if (search === "") {
      localStorage.setItem("city", "");
    }

    if (search === "") {
      localStorage.setItem("minPrice", 0);
    }
    if (search === "") {
      localStorage.setItem("users", 0);
    }
    if (search === "") {
      localStorage.setItem("gender", "");
    }
  }, [search]);

  useEffect(() => {
    localStorage.setItem("city", "");
  }, []);

  const onpres = async (e) => {
    let word = "";
    let gender = "";
    let city = "";
    let users = 0;
    let minPrice = 0;
    if (localStorage.getItem("search") !== null) {
      word = localStorage.getItem("search");
    }
    if (localStorage.getItem("city") !== null) {
      city = localStorage.getItem("city");
    }
    if (localStorage.getItem("minPrice") !== null) {
      minPrice = localStorage.getItem("minPrice");
    }
    if (localStorage.getItem("gender") !== null) {
      gender = localStorage.getItem("gender");
    }
    if (localStorage.getItem("users") !== null) {
      users = localStorage.getItem("users");
    }
    await dispatch(
      GetAllApartmentAction(
        `PageNumber=${e}&PageSize=${limit}&Search=${word}&Gender=${gender}&City=${city}&CountInApartment=${users}&minPrice=${minPrice}`
      )
    );
  };

  useEffect(() => {
    get("");
    localStorage.removeItem("search");
  }, []);

  const res = useSelector((item) => item.AllApartment.getApatments);
  useEffect(() => {
    if (loading === false) {
      if (res && res.data) {
        setData(res.data);
      }
    }
  }, [loading]);

  const items = res;
  return [loading, data, onpres, search, onChangeSearch, items];
};

export default GetAllApartmentHook;

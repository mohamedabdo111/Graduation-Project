import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllUsersAction,
  GetNumbersUsersAction,
} from "../redux/actions/adminAction";

const AdminAllUsersHook = (role) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loadingg, setLoadingg] = useState(true);
  const [data, setData] = useState("");
  const [numberUsers, setNumbers] = useState("");

  const get = async (page, size) => {
    setLoading(true);
    await dispatch(GetAllUsersAction(page, size, role));
    setLoading(false);
  };

  useEffect(() => {
    get(1, 5);
    const numbers = async () => {
      setLoadingg(true);
      await dispatch(GetNumbersUsersAction(role));
      setLoadingg(false);
    };
    numbers();
  }, []);

  const onpress = async (e) => {
    get(e, 5);
  };

  const res = useSelector((item) => item.realAdmin.getAllUsers);
  const numbers = useSelector((item) => item.realAdmin.numberofusers);

  useEffect(() => {
    if (loadingg === false) {
      if (numbers && numbers.data && numbers.data.data) {
        setNumbers(numbers.data.data);
      }
    }
  }, [loadingg]);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data) {
        setData(res.data);
      }
    }
  }, [loading]);

  return [data, onpress, loading, loadingg, numberUsers];
};

export default AdminAllUsersHook;

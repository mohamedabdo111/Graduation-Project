import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsersRequestAction } from "../redux/actions/ownerAction";

const OwnerGetUserRequestHook = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var userId = JSON.parse(localStorage.getItem("UserInf")).userId;
  }

  const get = async (id, page, size) => {
    setLoading(true);
    await dispatch(GetUsersRequestAction(id, page, size));
    setLoading(false);
  };

  useEffect(() => {
    get(userId, 1, 2);
  }, []);

  const onpress = (e) => {
    get(userId, e, 2);
  };

  const res = useSelector((item) => item.AdminReducer.userRequests);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data) {
        setData(res.data);
      }
    }
  }, [loading]);

  return [loading, data, onpress];
};

export default OwnerGetUserRequestHook;

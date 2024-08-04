import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPendingAction } from "../redux/actions/adminAction";

const AdminGetAllPendingHook = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const get = async (page, size) => {
    setLoading(true);
    await dispatch(GetAllPendingAction(page, size));
    setLoading(false);
  };

  useEffect(() => {
    get(1, 2);
  }, []);

  const res = useSelector((item) => item.realAdmin.AllPending);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data) {
        setData(res.data);
      }
    }
  }, [loading]);

  const onpress = (e) => {
    get(e, 2);
  };

  return [loading, data, onpress];
};

export default AdminGetAllPendingHook;

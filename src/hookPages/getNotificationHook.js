import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetNotificationAction } from "../redux/actions/ownerAction";

const GetNotificationHook = (id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetNotificationAction(id));
      setLoading(false);
    };

    get();
  }, []);

  const res = useSelector((item) => item.AdminReducer.notification);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.data && res.data.data.notifies) {
        setData(res.data.data.notifies);
      }
    }
  }, [loading]);

  return [loading, data];
};

export default GetNotificationHook;

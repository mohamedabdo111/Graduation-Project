import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApartmentAction } from "../redux/actions/ownerAction";

const OwenrAllFlatsHook = (id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetApartmentAction(id, 1, 2));
      setLoading(false);
    };
    get();
  }, []);

  const onpress = async (e) => {
    setLoading(true);
    await dispatch(GetApartmentAction(id, e, 2));
    setLoading(false);
  };

  const res = useSelector((item) => item.AdminReducer.apartments);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data) {
        setTotalPages(res.data.totalPages);
      }

      if (res && res.data && res.data.date) {
        setData(res.data.date);
      }
    }
  }, [loading]);

  return [loading, data, totalPages, onpress];
};

export default OwenrAllFlatsHook;

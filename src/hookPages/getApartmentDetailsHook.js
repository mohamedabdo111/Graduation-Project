import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApartmentDetailsAction } from "../redux/actions/getAllApartmentAction";

const GetApartmentDetailsHook = (id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setDate] = useState("");

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetApartmentDetailsAction(id));
      setLoading(false);
    };

    get();
  }, []);

  //   const onPress = async (e) => {
  //     setLoading(true);
  //     await dispatch(GetApartmentDetailsAction(id, e, 2));
  //     setLoading(false);
  //   };

  const res = useSelector((item) => item.ApartmentDetails.getDetails);

  useEffect(() => {
    if (loading === false) {
      setDate(res.data);
    }
  }, [loading]);

  let item = res.data;

  return [loading, data, item];
};

export default GetApartmentDetailsHook;

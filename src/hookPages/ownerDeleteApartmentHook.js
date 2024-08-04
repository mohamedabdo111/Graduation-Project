import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveAction } from "../redux/actions/ownerAction";
import { notify } from "../components/fixed/notify";

const OwnerDeleteApartmentHook = (id) => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const activeModal = () => {
    setActive(true);
  };

  const NotActive = () => {
    setActive(false);
  };

  const RemoveApartment = async () => {
    setLoading(true);
    await dispatch(RemoveAction(id));
    setLoading(false);
  };

  const res = useSelector((item) => item.AdminReducer.remove);
  console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.statusCode === 200) {
        notify("This apartment is deleted", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  }, [loading]);

  return [active, loading, activeModal, NotActive, RemoveApartment];
};

export default OwnerDeleteApartmentHook;

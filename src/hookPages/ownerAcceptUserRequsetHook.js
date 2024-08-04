import { useEffect, useState } from "react";
import { RemoveUserAction } from "../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../components/fixed/notify";
import { HandleRequestAction } from "../redux/actions/ownerAction";

const OwnerAcceptUserRequsetHook = (id) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const activeModal = () => {
    setActive(true);
  };

  const NotActive = () => {
    setActive(false);
  };

  const RemoveUser = async () => {
    setLoading(true);
    await dispatch(
      HandleRequestAction({
        id,
        accept: false,
      })
    );
    setLoading(false);
    setActive(false);
  };
  const AcceptUser = async () => {
    setLoading(true);
    await dispatch(
      HandleRequestAction({
        id,
        accept: true,
      })
    );
    setLoading(false);
    setActive(false);
  };

  const res = useSelector((item) => item.AdminReducer.handleRequest);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.statusCode === 200) {
        notify("Done", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }

      console.log(res);
    }
  }, [loading]);

  return [loading, NotActive, activeModal, RemoveUser, active, AcceptUser];
};

export default OwnerAcceptUserRequsetHook;

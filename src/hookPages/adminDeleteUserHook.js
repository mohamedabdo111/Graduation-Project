import { useEffect, useState } from "react";
import { RemoveUserAction } from "../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../components/fixed/notify";

const AdminDeleteUserHook = (id) => {
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
    await dispatch(RemoveUserAction(id));
    setLoading(false);
    setActive(false);
  };

  const res = useSelector((item) => item.realAdmin.deleteuser);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.statusCode === 200) {
        notify("This user has been deleted", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }

      console.log(res);
    }
  }, [loading]);

  return [loading, NotActive, activeModal, RemoveUser, active];
};

export default AdminDeleteUserHook;

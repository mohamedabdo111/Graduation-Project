import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AcceptPendingAction } from "../redux/actions/adminAction";
import { notify } from "../components/fixed/notify";

const AcceptPendingHook = (id) => {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [Ispress, setIspress] = useState(false);

  const dispatch = useDispatch();

  const Accept = async () => {
    setIspress(true);
    setLoading(true);
    await dispatch(
      AcceptPendingAction({
        apartmentID: id,
        accept: true,
      })
    );
    setLoading(false);
    setActive(false);
  };

  const activeModal = () => {
    setActive(true);
  };

  const NotActive = () => {
    setActive(false);
  };

  const Decline = async () => {
    setIspress(true);
    setLoading(true);
    await dispatch(
      AcceptPendingAction({
        apartmentID: id,
        accept: false,
      })
    );
    setLoading(false);
    setActive(false);
  };

  const res = useSelector((item) => item.realAdmin.handlePending);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        setIspress(false);
      }
      if (res && res.data && res.data.statusCode === 200) {
        notify("done", "success");

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    }
  }, [loading]);

  return [Accept, activeModal, NotActive, Decline, loading, active, Ispress];
};

export default AcceptPendingHook;

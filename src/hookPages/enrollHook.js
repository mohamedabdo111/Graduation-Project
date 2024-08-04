import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EnrollAction,
  RequestApartmentAction,
} from "../redux/actions/anyoneAction";
import { useNavigate } from "react-router-dom";
import { notify } from "../components/fixed/notify";

const EnrollHook = (id) => {
  const navigate = useNavigate();
  const [loadingEnroll, setloadingEnrol] = useState(true);
  const dispatch = useDispatch();

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var userId = JSON.parse(localStorage.getItem("UserInf")).userId;
  }

  const OnEnroll = async () => {
    setloadingEnrol(true);
    await dispatch(
      RequestApartmentAction({
        userID: userId,
        apartmentID: id,
      })
    );
    await dispatch(
      EnrollAction({
        userID: userId,
        apartmentID: id,
      })
    );
    setloadingEnrol(false);
  };

  const Enroll = useSelector((item) => item.AnyOne.enroll);
  const request = useSelector((item) => item.AnyOne.requestApart);

  useEffect(() => {
    if (loadingEnroll === false) {
      if (Enroll && Enroll.status === 401 && request.status === 401) {
        navigate("/login");
      } else if (
        request &&
        request.data &&
        request.data.message === "You Are Already Assigned in other apartment"
      ) {
        notify("You Are Already Assigned in other apartment", "warn");
        return;
      } else if (
        request &&
        request.data &&
        request.data.message === "You Are Already Assigned in this apartment"
      ) {
        notify("You are already assigned in this apartment", "warn");
        return;
      } else if (
        Enroll &&
        Enroll.data &&
        Enroll.data.statusCode === 200 &&
        request.status === 200
      ) {
        notify("Please wait ", "success");
        setTimeout(() => {
          window.location.href = Enroll.data.data;
        }, 2000);
      }

      // handel errors in request apartmentsssss
    }
  }, [loadingEnroll]);

  return [loadingEnroll, OnEnroll];
};

export default EnrollHook;

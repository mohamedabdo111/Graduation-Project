import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../components/fixed/notify";
import {
  AddCommentAction,
  AddLikeAction,
  EnrollAction,
} from "../redux/actions/anyoneAction";
import { useNavigate } from "react-router-dom";
import { GetApartmentDetailsAction } from "../redux/actions/getAllApartmentAction";

const AddLikeHook = (id) => {
  const navigate = useNavigate();
  const [loadingLike, setLoadingLike] = useState(true);
  const dispatch = useDispatch();

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var userId = JSON.parse(localStorage.getItem("UserInf")).userId;
  }

  const SubmitLike = async () => {
    setLoadingLike(true);
    await dispatch(
      AddLikeAction({
        userID: userId,
        apartmentID: id,
      })
    );
    setLoadingLike(false);
  };

  const resLike = useSelector((item) => item.AnyOne.addLike);

  useEffect(() => {
    if (loadingLike === false) {
      if (resLike && resLike.data && resLike.data.statusCode === 200) {
        const get = async () => {
          await dispatch(GetApartmentDetailsAction(id));
        };
        get();
        return;
      } else if (resLike && resLike.status === 401) {
        navigate("/login");
      } else if (
        resLike &&
        resLike.data &&
        resLike.data.message === "Can't React,You Already reacted."
      ) {
        notify("Already like it", "warn");
      }
    }
  }, [loadingLike]);

  return [loadingLike, SubmitLike];
};

export default AddLikeHook;

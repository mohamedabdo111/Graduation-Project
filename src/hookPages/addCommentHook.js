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

const AddCommentHook = (id) => {
  const [comments, setComment] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var userId = JSON.parse(localStorage.getItem("UserInf")).userId;
  }

  const Submit = async () => {
    setLoading(true);
    if (comments === "") {
      return;
    }
    await dispatch(
      AddCommentAction({
        userID: userId,
        apartmentID: id,
        comment: comments,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.AnyOne.AddComment);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.statusCode === 200) {
        const get = async () => {
          await dispatch(GetApartmentDetailsAction(id));
        };
        get();

        setComment("");
      } else if (res && res.status === 401) {
        navigate("/login");
      }
    }
  }, [loading]);

  return [comments, loading, onChangeComment, Submit];
};

export default AddCommentHook;

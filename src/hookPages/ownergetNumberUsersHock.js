import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsersNumberAction } from "../redux/actions/ownerAction";

const OwnergetNumberUsersHock = () => {
  const dispatch = useDispatch();

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var id = JSON.parse(localStorage.getItem("UserInf")).userId;
  } else {
    id = "";
  }
  useEffect(() => {
    dispatch(GetUsersNumberAction(id));
  }, []);
  const res = useSelector((item) => item.AdminReducer.numberUsers);

  return [res];
};

export default OwnergetNumberUsersHock;

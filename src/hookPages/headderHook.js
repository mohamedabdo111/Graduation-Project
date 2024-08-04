import { useState } from "react";
const HeadderHook = () => {
  const [ispress, setIsPress] = useState(false);
  const [ispressuser, setIsPressuser] = useState(false);

  const activate = () => {
    setIsPress(!ispress);
  };

  const notActive = () => {
    setIsPress(false);
  };

  const activeuser = () => {
    setIsPressuser(!ispressuser);
  };

  const Logout = () => {
    localStorage.removeItem("UserInf");
    localStorage.removeItem("token");
    window.location.reload();
  };
  const IsUserHere = JSON.parse(localStorage.getItem("UserInf"));

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var ImageUser = JSON.parse(localStorage.getItem("UserInf")).userImageUrl;
  }

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var userName = JSON.parse(localStorage.getItem("UserInf")).userName;
  }

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var email = JSON.parse(localStorage.getItem("UserInf")).role;
  }

  return [
    activate,
    ispress,
    ispressuser,
    notActive,
    activeuser,
    Logout,
    IsUserHere,
    ImageUser,
    userName,
    email,
  ];
};

export default HeadderHook;

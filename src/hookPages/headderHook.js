import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useRef, useState } from "react";
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

  // onclick bodyyy

  const Ref = useRef();
  const divRef = useRef();
  const minRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target !== divRef.current &&
        e.target !== minRef.current &&
        e.target !== Ref.current
      ) {
        setIsPressuser(false);
      }
    });
  });
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
    Ref,
    divRef,
    minRef,
  ];
};

export default HeadderHook;

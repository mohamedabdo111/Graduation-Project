import { useEffect, useState } from "react";

const ProtectRouteHock = () => {
  const [userDate, setUserData] = useState(
    JSON.parse(localStorage.getItem("UserInf"))
  );
  const [isUser, setIsuser] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [isOwner, setIsOwner] = useState();

  useEffect(() => {
    if (userDate != null) {
      if (userDate.email === "Admin@gmail.com") {
        setIsAdmin(true);
        setIsuser(false);
        setIsOwner(false);
      } else if (userDate.role === "Owner") {
        setIsOwner(true);
        setIsAdmin(false);
        setIsuser(false);
      }
    } else {
      setIsAdmin(false);
      setIsuser(false);
      setIsOwner(false);
    }
  }, []);

  return [isUser, isAdmin, isOwner, userDate];
};

export default ProtectRouteHock;

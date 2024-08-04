import React from "react";
import img from "../../../images/user login.png";

const NotificationSection = ({ item }) => {
  return (
    <div className="flex items-center gap-3 bg-white p-3  border-b-2">
      <img
        src={item.userImage != null ? item.userImage : img}
        alt="image-user"
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        className=" object-cover"
        property="lazy"
      ></img>
      <div>
        <p>
          <span className=" font-semibold">{item.userName}</span>{" "}
          {item.type === "view"
            ? `${item.type} your profile`
            : `${item.type} on your post`}
        </p>
      </div>
    </div>
  );
};

export default NotificationSection;

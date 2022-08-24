import React from "react";
import "./style.scss";

const UserAvatar = ({ avatar, availabilityStatus }) => {
  console.log(avatar);
  return (
    <div className="wrapper">
      <img src={avatar} alt="avatar" className="avatar" />
      <div
        className={
          availabilityStatus === "AFK"
            ? "status afkStatus"
            : "status onlineStatus"
        }
      ></div>
    </div>
  );
};

export default UserAvatar;

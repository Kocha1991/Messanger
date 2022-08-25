import React from "react";
import { RiRadioButtonLine } from "react-icons/ri";

import "./style.scss";


const UserAvatar = ({ avatar, availabilityStatus }) => {
  console.log(avatar);
  return (
    <div className="wrapper">
      <img src={avatar} alt="avatar" className="avatar" />
      <div
       
      ></div>
      <RiRadioButtonLine  className={
          availabilityStatus === "AFK"
            ? "status status_afkStatus"
            : "status status_onlineStatus"
        }/>
    </div>
  );
};

export default UserAvatar;

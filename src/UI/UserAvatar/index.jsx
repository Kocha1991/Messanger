import React from "react";
import { RiRadioButtonLine } from "react-icons/ri";

import "./style.scss";

const UserAvatar = ({ avatar, availabilityStatus = null }) => {
  return (
    <div className="wrapper">
      <img src={avatar} alt="avatar" className="avatar" />
      {availabilityStatus && (
        <RiRadioButtonLine
          className={
            availabilityStatus === "AFK"
              ? "status status_afkStatus"
              : "status status_onlineStatus"
          }
        />
      )}
    </div>
  );
};

export default UserAvatar;

import React from "react";
import UserAvatar from "../UI/UserAvatar";

import "./style.scss";

const Contact = ({ firstName, secondName, avatar, availabilityStatus }) => {
  return (
    <div id="contact" className="contact">
      <UserAvatar avatar={avatar} availabilityStatus={availabilityStatus} />

      <div className="name">
        {firstName} {secondName}
      </div>
    </div>
  );
};

export default Contact;

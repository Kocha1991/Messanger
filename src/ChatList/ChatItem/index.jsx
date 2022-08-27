import React from "react";
import { IoIosChatboxes } from 'react-icons/io'
import "./style.scss";
import UserAvatar from "../../UI/UserAvatar";
import DateStamp from "../../UI/DateStamp";

const ChatItem = ({ contact, handleContactClick }) => {
  const {
    firstName,
    secondName,
    avatar,
    availabilityStatus,
    messages,
    newUnreadMesssages,
  } = contact;

  return (
    <div className="user" onClick={() => handleContactClick(contact)}>
      <div className="user__avatar">
        <UserAvatar avatar={avatar} availabilityStatus={availabilityStatus} />
      </div>
      <div className="name">
        {firstName} {secondName}
      </div>
      {newUnreadMesssages && <IoIosChatboxes className="missed-message"/>}
      {!messages.length ? (
        <>
          <div className="message message_no">No messages yet!</div>
          <div className="user__devider"></div>
        </>
      ) : (
        <>
          <div className="messades__data">
            <DateStamp date={messages[messages.length - 1].date} />
          </div>
          <div className="message">
            {messages[messages.length - 1].messageText}
          </div>
          <div className="user__devider"></div>
        </>
      )}
    </div>
  );
};

export default ChatItem;

import React, { useEffect, useState } from "react";

import "./style.scss";
import UserAvatar from "../../UI/UserAvatar";
import { contactsData, messagesData } from "../../helpers/constants";

const ChatItem = ({ contact, handleContactClick }) => {
  const { id, firstName, secondName, avatar, availabilityStatus } = contact;

  const [userMessages, setUserMessage] = useState(null);
  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    const foundUserMessages = messagesData.filter(
      (message) => id === message.userId
    );
    setUserMessage(foundUserMessages);
    if (foundUserMessages && foundUserMessages.length) {
      setLastMessage(foundUserMessages[foundUserMessages.length - 1]);
    }
  }, []);
  return (
    <div className="user" onClick={() => handleContactClick(contact)}>
      <div className="user__avatar">
        <UserAvatar avatar={avatar} availabilityStatus={availabilityStatus} />
      </div>
      <div className="name">
        {firstName} {secondName}
      </div>
      {!lastMessage ? (
        <div>No messages yet</div>
      ) : (
        <>
          <div className="data">
            {new Date(lastMessage.date).toLocaleDateString("us")}
          </div>
          <div className="message">{lastMessage.messageText}</div>
          <div className="user__devider"></div>
        </>
      )}
    </div>
  );
};

export default ChatItem;

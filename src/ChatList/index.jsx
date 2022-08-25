import React from "react";
import ChatItem from "./ChatItem";


import "./style.scss";

const ChatList = ({ contacts, handleContactClick }) => {
  return (
    <div id="chat" className="chat">
      <div className="chat__header">Chats</div>
      <div className="wrapper-scroll">
        {contacts.map((contact) => (
          <ChatItem
            contact={contact}
            key={contact.id}
            handleContactClick={handleContactClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;

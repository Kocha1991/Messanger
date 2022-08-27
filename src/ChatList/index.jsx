import React from "react";
import { filterContacts } from "../helpers";
import ChatItem from "./ChatItem";

import "./style.scss";

const ChatList = ({ contacts, handleContactClick, searchedContact }) => {
  return (
    <div id="chat" className="chat">
      <div className="chat__header">Chats</div>
      <div className="wrapper-scroll">
        {contacts
          .sort(
            (prevContact, nextContact) =>
              new Date(nextContact.lastModified) -
              new Date(prevContact.lastModified)
          )
          .map((contact) =>
            filterContacts(searchedContact, contact) ? (
              <ChatItem
                contact={contact}
                key={contact.id}
                handleContactClick={handleContactClick}
              />
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
};

export default ChatList;

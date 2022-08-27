import React from "react";
import Contact from "../Contact";

import MessageItem from "./MessageItem";

import "./style.scss";

const Messages = ({ selectedContact }) => {
  //вивести меседжі , якщо їх немає , то повідомлення що немає.
  //дані про вибраного контакта*аватара, імя беремо selectedContact

  return !selectedContact ? (
    <div id="messages" className="messages">
      No message
    </div>
  ) : (
    <>
      <Contact
        firstName={selectedContact.firstName}
        secondName={selectedContact.secondName}
        avatar={selectedContact.avatar}
        availabilityStatus={selectedContact.availabilityStatus}
      />{" "}
      <div id="messages" className="messages">
        <div className="wrapper-scroll wrapper-scroll_messages ">
          {selectedContact.messages.length
            ? selectedContact.messages.map((message) => (
                <MessageItem key={message.id} message={message} avatar={selectedContact.avatar}/>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default Messages;

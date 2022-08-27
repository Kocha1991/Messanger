import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import Search from "./UI/SearchField";

import "./App.scss";
import Messages from "./Messages";
import NewMessage from "./UI/NewMessage";
import { contactsData as data, myUserId } from "./helpers/constants";
import { getChatResponseMessage } from "./helpers/api";
import { makeUniqueId } from "./helpers";

function App() {
  const storageData = localStorage.getItem("storageContacts");
  const storageContacts = storageData ? JSON.parse(storageData) : null;
  const [searchedContact, setSearchContact] = useState("");
  const [contactsData, setContactsData] = useState(
    storageContacts ? storageContacts : data
  );

  const [selectedContact, setSelectedContact] = useState(null);
  const [newMessageText, setNewMessageText] = useState("");

  const onSearchChange = ({ target }) => {
    const { value } = target;
    setSearchContact(value);
  };

  const onMessageChange = ({ target }) => {
    const { value } = target;
    setNewMessageText(value);
  };

  const handleNewMessageSend = (userId) => {
    const newMessage = {
      id: makeUniqueId(myUserId),
      date: new Date(),
      isMyMessage: true,
      messageText: newMessageText,
    };

    setSelectedContact((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    setContactsData((prev) =>
      prev.map((c) =>
        c.id === userId
          ? {
              ...c,
              messages: [...c.messages, newMessage],
            }
          : c
      )
    );
    setNewMessageText("");

    const messageDebounce = setTimeout(() => {
      getChatResponseMessage()
        .then((res) => {
          const receivedMessage = {
            id: res.data.id,
            messageText: res.data.value,
            date: new Date(),
            isMyMessage: false,
          };
          if (selectedContact && selectedContact.id === userId) {
            setSelectedContact((prev) => ({
              ...prev,
              messages: [...prev.messages, receivedMessage],
            }));
          }
          setContactsData((prev) =>
            prev.map((c) =>
              c.id === userId
                ? {
                    ...c,
                    lastModified: new Date(),
                    messages: [...c.messages, receivedMessage],
                  }
                : c
            )
          );
        })
        .catch((e) => console.log(e));
    }, 10000);

    return () => clearTimeout(messageDebounce);
  };

  useEffect(() => {
    localStorage.setItem("storageContacts", JSON.stringify(contactsData));
  }, [contactsData]);

  const handleContactClick = (contact) => setSelectedContact(contact);

  return (
    <div className="main">
      <Search
        searchedContact={searchedContact}
        onSearchChange={onSearchChange}
      />
      <ChatList
        contacts={contactsData}
        handleContactClick={handleContactClick}
        searchedContact={searchedContact}
      />
      <Messages selectedContact={selectedContact} />
      {selectedContact && (
        <NewMessage
          newMessageText={newMessageText}
          onMessageChange={onMessageChange}
          handleNewMessageSend={handleNewMessageSend}
          userId={selectedContact.id}
        />
      )}
    </div>
  );
}

export default App;

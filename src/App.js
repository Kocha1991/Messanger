import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import Search from "./UI/SearchField";

import "./App.scss";
import Messages from "./Messages";
import SearchMessages from "./UI/SearchMessages";
import { filterContacts } from "./helpers/helpers";
import { contactsData, messagesData } from "./helpers/constants";
import { hover } from "@testing-library/user-event/dist/hover";

function App() {
  const [searchedContact, setSearchContact] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filteredContactMessages, setFilteredContactsMessages] = useState([]);

  const onSearchChange = ({ target }) => {
    const { value } = target;
    setSearchContact(value);
  };

  useEffect(() => {
    const searchDebounce = setTimeout(
      () => {
        const resultContacts = filterContacts(searchedContact, contactsData);
        setFilteredContacts(resultContacts);
      },
      searchedContact ? 500 : 0
    );

    return () => clearTimeout(searchDebounce);
  }, [searchedContact]);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setFilteredContactsMessages(
      messagesData.filter((message) => message.userId === contact.id)
    );

    console.log(contact, "clicked contacted");
    console.log(
      messagesData.filter((message) => message.userId === contact.id)
    );
  };

  return (
    <div className="main">
      <Search
        searchedContact={searchedContact}
        onSearchChange={onSearchChange}
      />

      <ChatList
        contacts={filteredContacts}
        handleContactClick={handleContactClick}
      />
      <Messages
        selectedContact={selectedContact}
        filteredContactMessages={filteredContactMessages}
      />
      <SearchMessages />
    </div>
  );

  
}

export default App;

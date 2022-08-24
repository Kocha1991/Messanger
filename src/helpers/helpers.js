export const filterContacts = (searchedContact, contacts) => {
  if (searchedContact) {
    const preparedSearchedContact = String(searchedContact)
      .toLocaleLowerCase()
      .replace(/\s/g, "");

    return contacts.filter((contact) =>
      `${contact.firstName}${contact.secondName}`
        .toLocaleLowerCase()
        .replace(/\s/g, "")
        .includes(preparedSearchedContact)
    );
  } else {
    return contacts;
  }
};

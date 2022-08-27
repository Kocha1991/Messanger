export const filterContacts = (searchedContact, contact) => {
  if (searchedContact) {
    const preparedSearchedContact = String(searchedContact)
      .toLocaleLowerCase()
      .replace(/\s/g, "");

    return `${contact.firstName}${contact.secondName}`
      .toLocaleLowerCase()
      .replace(/\s/g, "")
      .includes(preparedSearchedContact);
  } else {
    return true;
  }
};

export const makeUniqueId = (userId) => {
  return `${userId }${(new Date()).getTime()}`
}

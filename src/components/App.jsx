import { useState, useEffect } from "react";
import { AppWrap } from "./App.styled";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const INITIAL_STATE = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem("contacts")) ?? INITIAL_STATE
  );
  const [filter, setFilter] = useState("");

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const isOldContact = contacts.find((contact) => contact.name === name);

    if (isOldContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  const changeFilter = (event) => setFilter(event.currentTarget.value);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const removeContact = (id) => {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = getFilteredContacts();
  return (
    <>
      <AppWrap>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          removeHandler={removeContact}
        />
      </AppWrap>
    </>
  );
}

App.propTypes = {
  state: PropTypes.objectOf({
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  }),
};

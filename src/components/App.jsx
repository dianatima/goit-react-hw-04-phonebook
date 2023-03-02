import { Component } from "react";
import { AppWrap } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

export  class App extends Component  {
  state = {
    contacts: INITIAL_STATE,
    filter: ''
  }

  addContact = ({ name, number }) => {

    const contact = {
      id: nanoid(),
      name: name,
      number: number
    }

    const isOldContact = this.state.contacts.find(contact => contact.name === name);

    if (isOldContact) {
      alert(`${name} is already in contacts`)
      return
    }

    this.setState(prevState => {
      return ({
        contacts: [contact, ...prevState.contacts]
      })
    })
  }

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };
   

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter)
    })
  }

  removeContact = (id) => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter((contact) => contact.id !== id),
      };
    });
  };


  componentDidMount() {
    console.log('comp didMount');

    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('comp didUpdate');
    console.log('prevState', prevState);
    console.log(this.state);

    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось contacts');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
}



  render() {

    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <AppWrap>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContacts} removeHandler={this.removeContact} />
        </AppWrap>
      </>
    )
  }
};


App.propTypes = {
  state: PropTypes.objectOf({
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  }),
};
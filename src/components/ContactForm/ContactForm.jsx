import { useState } from "react";
import { ContactFormWrap, InputWrap, Button } from "./ContactForm.styled";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';


export function ContactForm({ onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  
  const handleChange = (event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
        case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  })
     
 const  handleSubmit = event => {
    event.preventDefault();

    onSubmit({name, number})
    reset();
  }

  const reset = event => {
    const { name, number } = event.target.elements;

    name.value = '';
    number.value = '';
    setName('');
    setNumber('');
  }

     return (
         <ContactFormWrap onSubmit={handleSubmit}>
         <label htmlFor={nameInputId}>Name</label>
         <InputWrap
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яАйв-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
           value={name}
           onChange={handleChange}
           id={nameInputId}
           />
             <label htmlFor={numberInputId}>Number</label>
            <InputWrap
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}
                id={numberInputId}
            />
            <Button type="submit">Add contact</Button>
            </ContactFormWrap>
    )
  }


ContactForm.propTypes = {
  state: PropTypes.objectOf({
    number: PropTypes.string.isRequired,
    name: PropTypes.number.isRequired,
  }),

  onSubmit: PropTypes.func.isRequired,
};
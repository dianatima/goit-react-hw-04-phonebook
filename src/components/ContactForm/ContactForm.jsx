import { Component } from "react";
import { ContactFormWrap, InputWrap, Button } from "./ContactForm.styled";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';


const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {...INITIAL_STATE};

  nameInputId = nanoid();
  numberInputId = nanoid();
  

    handleChange = event => {
      const { name, value} = event.currentTarget
      this.setState({ [name]: value })

    }
    
     
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state)
    this.reset();
  }

  reset = () => {
    this.setState ({...INITIAL_STATE})
  }

 render() {
     return (
         <ContactFormWrap onSubmit={this.handleSubmit}>
         <label htmlFor={this.nameInputId}>Name</label>
            <InputWrap
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
           value={this.state.name}
           onChange={this.handleChange}
           id={this.nameInputId}
            />
             <label htmlFor={this.numberInputId}>Number</label>
            <InputWrap
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleChange}
                id={this.numberInputId}
            />
            <Button type="submit">Add contact</Button>
            </ContactFormWrap>
    )
  }
}


ContactForm.propTypes = {
  state: PropTypes.objectOf({
    number: PropTypes.string.isRequired,
    name: PropTypes.number.isRequired,
  }),

  onSubmit: PropTypes.func.isRequired,
};
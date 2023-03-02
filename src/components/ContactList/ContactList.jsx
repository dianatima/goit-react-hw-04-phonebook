import PropTypes from 'prop-types'
import { ContactWrap } from './ContactList.styled';

export const ContactList = ({ contacts, removeHandler }) => {
    return (
        contacts.map((contact) => {
            return (
                <ContactWrap key={contact.id}>
                    <p>{contact.name}: {contact.number}</p>
                    <button onClick={() => {removeHandler(contact.id)}}>Delete</button>
                </ContactWrap>
                )
            })
    )
} 


ContactList.propTypes = {
    removeHandler: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
};
  
// export class ContactList extends Component {

//     render() {
//         return (
//             this.props.contacts.map((contact) => {
//                 return (
//                     <ContactWrap key={contact.id}>
//                         <p>{contact.name}: {contact.number}</p>
//                         <button onClick={() => {this.props.removeHandler(contact.id)}}>Delete</button>
//                     </ContactWrap>
//                     )
//                 })
//        )
//      }
// }
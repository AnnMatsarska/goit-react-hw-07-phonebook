import { List, Item } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactItem name={name} number={number} id={id} />
          </Item>
        );
      })}
    </List>
  );
};

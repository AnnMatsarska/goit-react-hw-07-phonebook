import { Button, Form, Input, Label } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const hasNameDuplicate = name => {
    return contacts.some(contact => contact.name === name);
  };

  const hasNamberDuplicate = number => {
    return contacts.some(contact => contact.number === number);
  };

  const handleChange = ({ name, value }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (hasNameDuplicate(name)) {
      alert(` ${name} is already in contacts`);
      return;
    }

    if (hasNamberDuplicate(number)) {
      alert(` Number ${number} is already in contacts`);
      return;
    }

    dispatch(addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={event => handleChange(event.target)}
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            required
            onChange={event => handleChange(event.target)}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

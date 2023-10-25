import { useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { getContacts } from 'redux/selectors';

import { Container } from './Container.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="PHONEBOOK">
        <ContactForm />
      </Section>
      <Section title="CONTACTS">
        {contacts.length !== 0 && <Filter />}
        <ContactList />
      </Section>
    </Container>
  );
};

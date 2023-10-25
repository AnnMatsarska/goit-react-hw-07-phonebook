import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { Loader } from './Loader/Loader';

import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { Container } from './Container.styled';
import { notifications } from 'services/notifications';

export const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error, notifications);
  }, [error]);

  return (
    <Container>
      <Section title="PHONEBOOK">
        <ContactForm />
      </Section>
      <Section title="CONTACTS">
        {isLoading && <Loader />}
        {!isLoading && contacts.length !== 0 && <Filter />}
        {!isLoading && contacts.length !== 0 && <ContactList />}
      </Section>
      <ToastContainer />
    </Container>
  );
};

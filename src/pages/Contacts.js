import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import {
  selectAllContacts,
  selectError,
  selectLoading,
} from '../redux/contacts/selectors';
import FilterContact from 'components/FilterContact/FilterContact';
import { Box, CircularProgress } from '@mui/material';
import toast from 'react-hot-toast';
import { Container } from 'components/FilterContact/FilterContact.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectAllContacts);
  const error = useSelector(selectError);
  const [toastDisplayed, setToastDisplayed] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error && !toastDisplayed) {
      toast.error('Something went wrong');
      setToastDisplayed(true);
    }
  }, [error, toastDisplayed]);

  return (
    <>
      <ContactForm />
      <FilterContact />
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <CircularProgress
            sx={{
              color: '#0600a9',
              marginBottom: 0,
              padding: 0,
            }}
          />
        </Box>
      )}
      {contacts && contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Container>
          <h1>Contacts:</h1>
          <h3>There are no contacts</h3>
        </Container>
      )}
    </>
  );
}

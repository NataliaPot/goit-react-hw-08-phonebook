import React from 'react';
import { ContainerList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { filteredContacts } from '../../redux/contacts/selectors';
import { List } from '@mui/material';

const ContactList = () => {
  const onFilteredContact = useSelector(filteredContacts);

  return (
    <ContainerList>
      <h1>Contacts:</h1>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {onFilteredContact.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </ContainerList>
  );
};

export default ContactList;

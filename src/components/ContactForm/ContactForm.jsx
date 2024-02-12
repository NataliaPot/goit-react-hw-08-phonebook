// import React, { useState } from 'react';
// import { Form, Label } from './ContactForm.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
// import { addContact } from '../../redux/contacts/contactsOperations';
// import { selectAllContacts } from '../../redux/contacts/selectors';
// import { Button } from '@mui/material';
// import toast from 'react-hot-toast';
// import { StyledInput } from 'components/ContactForm/ContactFormInput.styled';

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectAllContacts);

//   const [value, setValue] = useState({
//     name: '',
//     number: '',
//   });

//   const [errors, setErrors] = useState({
//     name: { isError: false, touched: false },
//     number: { isError: false, touched: false },
//   });

//   const handleBlur = name => {
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: { ...prevErrors[name], touched: true },
//     }));

//     if (name === 'name') {
//       if (!/^[a-zA-Zа-яА-Я]+([ '—][a-zA-Zа-яА-Я]+)*$/.test(value.name.trim())) {
//         toast.error('Please enter a valid name.', {
//           duration: 3000,
//           position: 'top-center',
//           style: {
//             border: '1px solid #0600a9',
//             padding: '16px',
//             color: '#0600a9',
//             filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
//           },
//         });
//         setErrors(prevErrors => ({
//           ...prevErrors,
//           name: { isError: true, touched: true },
//         }));
//       } else {
//         setErrors(prevErrors => ({
//           ...prevErrors,
//           name: { isError: false, touched: true },
//         }));
//       }
//     }

//     if (name === 'number') {
//       if (
//         !/^\+?\d{1,4}?[ .\-]?\(?\d{1,3}?\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$/.test(
//           value.number.trim()
//         )
//       ) {
//         toast.error('Please enter a valid phone number.', {
//           duration: 3000,
//           position: 'top-center',
//           style: {
//             border: '1px solid #0600a9',
//             padding: '16px',
//             color: '#0600a9',
//             filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
//           },
//         });
//         setErrors(prevErrors => ({
//           ...prevErrors,
//           number: { isError: true, touched: true },
//         }));
//       } else {
//         setErrors(prevErrors => ({
//           ...prevErrors,
//           number: { isError: false, touched: true },
//         }));
//       }
//     }
//   };

//   const handleChange = ({ target: { value, name } }) => {
//     setValue(prevValue => ({ ...prevValue, [name]: value }));

//     if (errors[name].isError && value.trim() && name === 'name') {
//       setErrors(prevErrors => ({
//         ...prevErrors,
//         name: { isError: false, touched: false },
//       }));
//     }
//     if (errors[name].isError && value.trim() && name === 'number') {
//       setErrors(prevErrors => ({
//         ...prevErrors,
//         number: { isError: false, touched: false },
//       }));
//     }

//     if (!value && errors[name].isError) {
//       setErrors(prevErrors => ({
//         ...prevErrors,
//         [name]: { isError: false, touched: false },
//       }));
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const id = nanoid();

//     if (contacts.some(contact => contact.name === value.name)) {
//       setValue({
//         name: '',
//         number: '',
//       });
//       return toast(`${value.name} is already in contacts.`, {
//         duration: 5000,
//         position: 'top-center',
//         style: {
//           border: '1px solid #0600a9',
//           padding: '16px',
//           color: '#0600a9',
//           filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
//         },
//       });
//     }

//     if (!/^[a-zA-Zа-яА-Я]+([ '—][a-zA-Zа-яА-Я]+)*$/.test(value.name.trim())) {
//       setErrors(prevErrors => ({
//         ...prevErrors,
//         name: { isError: true, touched: true },
//       }));
//       return;
//     }

//     if (
//       !/^\+?\d{1,4}?[ .\-]?\(?\d{1,3}?\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$/.test(
//         value.number.trim()
//       )
//     ) {
//       setErrors(prevErrors => ({
//         ...prevErrors,
//         number: { isError: true, touched: true },
//       }));
//       return;
//     }

//     setErrors({
//       name: { isError: false, touched: false },
//       number: { isError: false, touched: false },
//     });

//     dispatch(addContact({ id, name: value.name, number: value.number }));
//     setValue({
//       name: '',
//       number: '',
//     });
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Label>
//         Name
//         <StyledInput
//           placeholder="Write your name here"
//           type="text"
//           name="name"
//           value={value.name}
//           onChange={handleChange}
//           required
//           onBlur={() => handleBlur('name')}
//           autoComplete="name"
//         />
//       </Label>
//       <Label>
//         Number
//         <StyledInput
//           placeholder="Write your number here"
//           type="tel"
//           name="number"
//           value={value.number}
//           onChange={handleChange}
//           required
//           onBlur={() => handleBlur('number')}
//           autoComplete="tel"
//         />
//       </Label>
//       <Button
//         type="submit"
//         variant="contained"
//         sx={{
//           backgroundColor: '#0600a9',
//           filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
//         }}
//       >
//         Add contact
//       </Button>
//     </Form>
//   );
// };

import React from 'react';
import { Form, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useFormLogic } from './ContactLogic';
import { Button } from '@mui/material';
import { StyledInput } from 'components/ContactForm/ContactFormInput.styled';
import { selectAllContacts } from '../../redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const { value, handleChange, handleSubmit, handleBlur } = useFormLogic();

  return (
    <Form onSubmit={handleSubmit(dispatch, contacts)}>
      <Label>
        Name
        <StyledInput
          placeholder="Write your name here"
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
          required
          onBlur={() => handleBlur('name', contacts)}
          autoComplete="name"
        />
      </Label>
      <Label>
        Number
        <StyledInput
          placeholder="Write your number here"
          type="tel"
          name="number"
          value={value.number}
          onChange={handleChange}
          required
          onBlur={() => handleBlur('number', contacts)}
          autoComplete="tel"
        />
      </Label>
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: '#0600a9',
          filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
          paddingTop: '8px',
        }}
      >
        Add contact
      </Button>
    </Form>
  );
};
